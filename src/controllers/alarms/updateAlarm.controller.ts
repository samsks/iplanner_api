import { Request, Response } from "express";
import { updateAlarmService } from "../../services/alarms";

const updateAlarmController = async (req: Request, res: Response) => {
  const data = await updateAlarmService(
    req.body,
    req.params.id,
    req.user.id,
    req.user.isAdm
  );
  return res.status(200).send(data);
};

export default updateAlarmController;
