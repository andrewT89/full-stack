import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { conexionDB } from '../conection/conection';
import { authRouter, clientRouter, walletRouter } from "../routes";
conexionDB();

// Create a new express app instance
const app: express.Application = express();

// enable cors
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', authRouter);
app.use('/api/client', clientRouter);
app.use('/api/wallet', walletRouter);

// Listen requests
app.listen(process.env.PORT, () => {
  // tslint:disable-next-line: no-console
  console.log("Express server puerto : " + process.env.PORT + " \x1b[32m%s\x1b[0m"," onLine");
});

export default app;
