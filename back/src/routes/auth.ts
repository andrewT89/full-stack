import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import {
  hashSync as hash,
  genSaltSync as saltSync,
  compareSync as comparePasswords,
} from "bcryptjs";
import dotenv from "dotenv";
import {
  handleFailedMessage,
  handleServerError,
  sendEmail,
} from "../utils";

/** Imports Models */
import { userModel } from "../models";
dotenv.config();
const salt = saltSync(10);

const router: express.Router = express.Router();

router.post("/user-login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const findUser: any = await userModel.findOne({ email });

  if (!findUser) {
    handleFailedMessage(res, "El correo y/o contraseña no coinciden ");
  }

  if (!comparePasswords(password, findUser.password)) {
    return handleFailedMessage(res, "El correo y/o contraseña no coinciden ");
  }

  const token = createToken(findUser);
  return res.status(200).json({
    message: "Login succeded",
    token,
    userId: findUser._id,
    user: findUser
  });
});

const createToken = (user: any) =>
  jwt.sign({ user }, process.env.SEED as string, { expiresIn: "2h" });

router.post("/register", async (req: Request, res: Response) => {
  const body = req.body;
  const user = body.firstName + ' ' + body.lastName;
  const message = Object.assign({}, body);
  const userRegister = new userModel({
    userName: body.userName,
    identification: body.identification,
    firstName: body.firstName,
    lastName: body.lastName,
    phoneNumber: body.phoneNumber,
    email: body.email,
    password: hash(body.password, salt),
  });

  await userRegister.save((err, _userSave) => {
    if (err) {
      handleServerError(res, "Error al crear usuario", err);
    }

    sendEmail(message, user);

    return res.status(201).json({
      ok: true,
      message: "Registro creado exitosamente"
    });
  });
});

export default router;
