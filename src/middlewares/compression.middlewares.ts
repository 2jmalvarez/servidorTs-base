import Compression from "compression";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

const shouldCompress = (
  req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>>
) => {
  if (req.headers["x-no-compression"]) {
    // No comprimira las respuestas, si este encabezado
    // está presente.
    return false;
  }
  // Recurrir a la compresión estándar
  return Compression.filter(req, res);
};

// Comprimir todas las respuestas HTTP
export const compression = Compression({
  // filter: Decide si la respuesta debe comprimirse o no,
  // en función de la función 'shouldCompress' anterior
  filter: shouldCompress,
  // threshold: Es el umbral de bytes para el tamaño del cuerpo
  // de la respuesta antes de considerar la compresión,
  // el valor predeterminado es 1 kB
  threshold: 0,
});
