import { Request, Response } from 'express'
export const home = (req: Request, res: Response) => {
  res.send("Api base en nodeTs");
};
