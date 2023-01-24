import { Request, Response, NextFunction } from "express";
import { AppError } from "../../../errors/AppError";
import AppDataSource from "../../../data-source";
import { Alarm } from "../../../entities";

const ensureAlarmIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const alarmId = req.params.id || req.body.alarmId;

  const alarmRepository = AppDataSource.getRepository(Alarm);

  const findAlarm = await alarmRepository.findOneBy({
    id: alarmId,
  });

  if (!findAlarm) {
    throw new AppError("AlarmID not exists", 404);
  }

  return next();
};

export default ensureAlarmIdExistsMiddleware;
