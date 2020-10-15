import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { handleMessage, handleServerError } from "../utils/handlerMessage";

/** Imports Models */
import { userModel } from "../models";
import { Mail } from "../service/mail";

// Set config env
dotenv.config();

const router: express.Router = express.Router();

router.get("/allClients", async (req: Request, res: Response) => {
  await userModel
    .find({}, "identification, firstName, lastName, email, phoneNumber")
    .exec((err, users) => {
      if (err) {
        handleServerError(res, "Error al cargar los clientes", err);
      }

      userModel.countDocuments({}, (_err, count) => {
        res.status(200).json({
          ok: true,
          users,
          total: count,
        });
      });
    });
});

router.get("/:id", async (req: Request, res: Response) => {
  const idClient = req.params.id;
  userModel.findById(idClient).exec((err, client) => {
    if (err) {
      handleServerError(res, "Error al buscar Cliente", err);
    }

    if (!client) {
      handleMessage(res, `El cliente con ID: ${idClient} no existe`);
    }

    res.status(200).json({
      ok: true,
      client,
    });
  });
});

router.get("/clientByIdentification/:identification", async (req: Request, res: Response) => {
    const identification = req.params.identification;
    userModel.findById(identification).exec((err, client) => {
      if (err) {
        handleServerError(res, "Error al buscar Cliente", err);
      }

      if (!client) {
        handleMessage(
          res,
          `El cliente con Identificación: ${identification} no existe`
        );
      }

      res.status(200).json({
        ok: true,
        client,
      });
    });
  }
);

router.post("/post", async (req: Request, res: Response) => {
  const { identification, firstName, lastName, email, phoneNumber } = req.body;

  const client = new userModel({
    identification,
    firstName,
    lastName,
    email,
    phoneNumber,
  });

  client.save((err, clientSave) => {
    if (err) {
      handleMessage(res, `Error al crear cliente`);
    }

    res.status(201).json({
      ok: true,
      article: clientSave,
    });
  });
});

router.put("/:id", async (req: Request, res: Response) => {
  const idClient = req.params.id;

  // Verificamos si existe el producto antes de actualizar
  const artUpdate = await userModel.findById(idClient);

  if (!artUpdate) {
    handleMessage(res, `El cliente con ID: ${idClient} no existe`);
  }
});

router.post("/sendEmail", async (req: Request, res: Response) => {
  const message = Object.assign({}, req.body);
  const mailParams = new Mail();

  mailParams.to = message.to;
  mailParams.subject = message.subject;
  mailParams.message = message.message;
  mailParams.sendEmail();
  return res.status(200).json({ ok: true });
});

router.delete("/:id");

export default router;
