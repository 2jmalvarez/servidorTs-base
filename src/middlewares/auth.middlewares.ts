import axios, { AxiosResponse } from "axios";
import fs from "fs";

export const autorizacion = async (req: any, res: any, next: any) => {
  fs.appendFile(
    "./logs/login.log",
    `${new Date().toLocaleString()} | ${JSON.stringify(req.headers)}\n`,
    (err) => {
      if (err) throw err;
    }
  );

  if (!req.headers["authorization"]) {
    res.status(401).end();
    return;
  }

  const token = req.headers["authorization"];
  console.log({ token });
  try {
    const respuesta: AxiosResponse<boolean> = await axios.post(
      process.env.API_AUTENTICACION + "/api/v1/token/info",
      {
        token: token.split(" ").pop(),
      }
    );
    next();
  } catch (error) {
    res.status(401).end();
  }
};
