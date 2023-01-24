import { Request, Response, NextFunction, RequestHandler } from "express";
import { AppError } from "../../errors/AppError";
import AppDataSource from "../../data-source";
import { TaskList } from "../../entities";

const ensureTaskListIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const taskListId = req.params.id || req.body.taskListId;

  const taskListRepository = AppDataSource.getRepository(TaskList);

  const findTaskList = await taskListRepository.findOneBy({
    id: taskListId,
  });

  if (!findTaskList) {
    throw new AppError("TaskListID not exists", 404);
  }

  return next();
};

export default ensureTaskListIdExistsMiddleware;
