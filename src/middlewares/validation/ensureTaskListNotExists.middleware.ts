import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { TaskList } from "../../entities";
import { AppError } from "../../errors/AppError";
import { normalize } from "../../scripts";

const ensureTaskListNotExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const taskListRepository = AppDataSource.getRepository(TaskList);

  const findTaskList = await taskListRepository.findOneBy({
    title: normalize(req.body.title),
  });

  if (findTaskList) {
    throw new AppError("TaskList already registered", 409);
  }

  return next();
};

export default ensureTaskListNotExistsMiddleware;
