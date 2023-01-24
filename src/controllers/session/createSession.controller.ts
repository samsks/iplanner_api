import { Request, Response } from "express";
import { createSessionService } from "../../services/session";

const createSessionController = async (req: Request, res: Response) => {
  const token = await createSessionService(req.body);
  return res.status(200).send(token);
};

export default createSessionController;
