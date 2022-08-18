import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import mainRoute from "./routes/main.route";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(mainRoute);

const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log("Servidor en puerto " + puerto);
});
