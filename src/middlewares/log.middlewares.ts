import fs from "fs";
import morgan from "morgan";
import moment from "moment-timezone";

// log
const log = fs.createWriteStream("./logs/rutas.log", { flags: "a" });
morgan.token("date", (req, res, tz) => {
  return moment()
    .tz(tz + "")
    .format("YYYY-MM-DD HH:mm:ss");
});
morgan.format(
  "myformat",
  ":date[America/Argentina/Buenos_Aires] | :remote-addr | :method | :url | :status | :response-time ms"
);

export const logConsole = morgan("myformat");
export const logFile = morgan("myformat", { stream: log });
