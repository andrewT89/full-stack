import express, { Request, Response } from "express";
import dotenv from "dotenv";

import { walletModel } from "../models";
import { handleMessage, handleServerError } from "../utils/handlerMessage";

// Set config env
dotenv.config();
const router: express.Router = express.Router();

router.get("/allWallets", async (req: Request, res: Response) => {
  await walletModel
    .find({})
    .exec((err, wallets) => {
      if (err) {
        handleServerError(res, "Error al cargar los registros", err);
      }

      console.log("wallets: ", wallets);

      walletModel.countDocuments({}, (_err, count) => {
        res.status(200).json({
          ok: true,
          wallets,
          total: count,
        });
      });
    });
});

router.post("/post", async (req: Request, res: Response) => {
  const { identification, phoneNumber, balance } = req.body;

  const wallet = new walletModel({
    identification,
    phoneNumber,
    balance,
  });

  wallet.save((err, walletSave) => {
    if (err) {
      handleMessage(res, `Error al crear la billetera`);
    }

    res.status(201).json({
      ok: true,
      wallet: walletSave,
    });
  });
});

export default router;
