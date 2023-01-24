import { Request, Response, NextFunction } from "express";
import { AppError } from "../../../errors/AppError";
import AppDataSource from "../../../data-source";
import { Task } from "../../../entities";

const ensureTaskIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const taskId = req.params.id || req.body.taskId;

  const taskRepository = AppDataSource.getRepository(Task);

  const findTask = await taskRepository.findOneBy({
    id: taskId,
  });

  if (!findTask) {
    throw new AppError("TaskID not exists", 404);
  }

  return next();
};

export default ensureTaskIdExistsMiddleware;
