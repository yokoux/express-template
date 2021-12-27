import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export default async (req: Request, res: Response) => {
  console.log(req.body);

  res.sendStatus(StatusCodes.OK);
  res.send("hello");
};
