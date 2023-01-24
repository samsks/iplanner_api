import { Request, Response } from "express";
import { updateTaskService } from "../../services/tasks";

const updateTaskController = async (req: Request, res: Response) => {
  const updatedTask = await updateTaskService(req.params.id, req.body);
  return res.status(201).send(updatedTask);
};
export default updateTaskController;
