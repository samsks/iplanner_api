import { Request, Response } from "express";
import { listAllAlarmsService } from "../../services/alarms";

const listAllAlarmsController = async (req: Request, res: Response) => {
  const data = await listAllAlarmsService();
  return res.status(200).send(data);
};

export default listAllAlarmsController;
