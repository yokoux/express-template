import { Express, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import sampleHandler from "./sample";

const router = Router();

router.get("/hello", sampleHandler);

const useRoutes = (app: Express) => {
  app.use("/api/v1/", router);
  app.use((_req: Request, res: Response) => {
    // 404
    res.status(StatusCodes.NOT_FOUND);
    res.send("Sorry can't find that!");
  });
};

export default useRoutes;
