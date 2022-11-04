import { autorizacion } from "./auth.middlewares";
import { logConsole, logFile } from "./log.middlewares";
import { compression } from "./compression.middlewares";
import { manejoErrores } from "./error.middlewares";

export { autorizacion, logConsole, logFile, compression, manejoErrores };
