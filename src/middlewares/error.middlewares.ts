import { ErrorRequestHandler } from "express";

export const manejoErrores: ErrorRequestHandler = (err, req, res, next) => {
  console.log("------------------ ERROR ------------------");
  console.log(" Message: ", err.message);
  console.log("  Status: ", err.status);
  console.log("-------------------------------------------");
  res.status(err.status);
  res.json({ message: err.message, error: true });
};

export class Error401 extends Error {
  status: number = 401;
  constructor(message: string | undefined) {
    super(message);
    this.name = "Error401";
  }
}

export class Error404 extends Error {
  status: number = 404;
  constructor(message: string | undefined) {
    super(message);
    this.name = "Error404";
  }
}
