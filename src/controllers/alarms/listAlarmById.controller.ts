import { Request, Response } from "express";
import { listAlarmByIdService } from "../../services/alarms";

const listAlarmByIdController = async (req: Request, res: Response) => {
  const data = await listAlarmByIdService(
    req.params.id,
    req.user.id,
    req.user.isAdm
  );
  return res.status(200).send(data);
};

export default listAlarmByIdController;
