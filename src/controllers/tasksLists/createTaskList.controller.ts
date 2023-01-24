import { Request, Response } from "express";
import { createTaskListService } from "../../services/tasksLists";

const createTaskListController = async (req: Request, res: Response) => {
  const newTask = await createTaskListService(req.body);
  return res.status(201).send(newTask);
};
export default createTaskListController;
