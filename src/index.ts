import express from "express";
import cors from "cors";
import "dotenv/config";

import { logConsole, logFile, compression, manejoErrores } from "./middlewares";

import mainRoute from "./routes/main.routes";

const app = express();

// encoders
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// logs
app.use(logConsole);
app.use(logFile);

// cors
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

// compression
app.use(compression);

// RUTAS
app.use("/", mainRoute);

// Errores
app.use(manejoErrores);

const puerto = process.env.PORT || 2003;

app.listen(puerto, () => {
  console.log(`servidor en puerto ${puerto}`);
});
