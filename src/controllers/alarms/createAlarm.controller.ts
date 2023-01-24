import { Request, Response } from "express";
import { createAlarmService } from "../../services/alarms";

const createAlarmController = async (req: Request, res: Response) => {
  const data = await createAlarmService(req.body, req.user.id);
  return res.status(201).send(data);
};

export default createAlarmController;
