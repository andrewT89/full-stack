import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  autoIndex: true,
};

export const conexionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB as string, options);
    // tslint:disable-next-line: no-console
    console.log("Conexion establecida con el servidor");
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.log("Ocurrio un error en la conexion: " + error);
    process.exit(1); // detiene la aplicación
  }
};
