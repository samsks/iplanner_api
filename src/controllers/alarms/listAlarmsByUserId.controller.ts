import { Request, Response } from "express";
import { listAlarmsByUserIdService } from "../../services/alarms";

const listAlarmsByUserIdController = async (req: Request, res: Response) => {
  const data = await listAlarmsByUserIdService(req.params.id);
  return res.status(200).send(data);
};

export default listAlarmsByUserIdController;
