import { Request, Response } from "express";
import { deleteAlarmService } from "../../services/alarms";

const deleteAlarmController = async (req: Request, res: Response) => {
  await deleteAlarmService(req.params.id, req.user.id, req.user.isAdm);
  return res.status(204).send();
};
export default deleteAlarmController;
