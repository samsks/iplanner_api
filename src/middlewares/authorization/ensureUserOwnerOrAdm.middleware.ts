import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError";
import AppDataSource from "../../data-source";
import { Alarm, Finance, Task, TaskList } from "../../entities";

const ensureUserOwnerOrAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.path.startsWith("/users/") || req.baseUrl.startsWith("/users")) {
    if (req.user.isAdm == false && req.user.id != req.params.id) {
      throw new AppError("Missing admin permissions", 401);
    }
  } else if (req.baseUrl.startsWith("/finance")) {
    const financeId = req.originalUrl.slice(9);

    const user = await AppDataSource.getRepository(Finance)
      .createQueryBuilder()
      .select("user.id", "id")
      .from(Finance, "finance")
      .innerJoin("finance.user", "user")
      .where("finance.id = :financeId", { financeId })
      .getRawOne();

    if (req.user.isAdm == false && req.user.id != user.id) {
      throw new AppError("Missing admin permissions", 401);
    }
  } else if (req.baseUrl.startsWith("/alarms")) {
    const alarmId = req.originalUrl.slice(8);

    const user = await AppDataSource.getRepository(Alarm)
      .createQueryBuilder()
      .select("user.id", "id")
      .from(Alarm, "alarm")
      .innerJoin("alarm.user", "user")
      .where("alarm.id = :alarmId", { alarmId })
      .getRawOne();

    if (req.user.isAdm == false && req.user.id != user.id) {
      throw new AppError("Missing admin permissions", 401);
    }
  } else if (req.baseUrl.startsWith("/tasks")) {
    const taskId = req.originalUrl.slice(7);

    const user = await AppDataSource.getRepository(Task)
      .createQueryBuilder()
      .select("user.id", "id")
      .from(Task, "task")
      .innerJoin("task.user", "user")
      .where("task.id = :taskId", { taskId })
      .getRawOne();

    if (req.user.isAdm == false && req.user.id != user.id) {
      throw new AppError("Missing admin permissions", 401);
    }
  } else if (req.baseUrl.startsWith("/tasksList")) {
    const taskListId = req.originalUrl.slice(11);

    const user = await AppDataSource.getRepository(TaskList)
      .createQueryBuilder()
      .select("user.id", "id")
      .from(TaskList, "taskList")
      .innerJoin("taskList.tasks", "task")
      .innerJoin("task.user", "user")
      .where("taskList.id = :taskListId", { taskListId })
      .getRawOne();

    if (req.user.isAdm == false && req.user.id != user.id) {
      throw new AppError("Missing admin permissions", 401);
    }
  }

  return next();
};

export default ensureUserOwnerOrAdmMiddleware;
