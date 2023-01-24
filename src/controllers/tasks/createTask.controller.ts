import { Request, Response } from "express";
import { createTaskService } from "../../services/tasks";

const createTaskController = async (req: Request, res: Response) => {
  const newTask = await createTaskService(req.body, req.body.id);
  return res.status(201).send(newTask);
};
export default createTaskController;
