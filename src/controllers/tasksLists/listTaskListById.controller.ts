import { Request, Response } from "express";
import { listTaskListByIdService } from "../../services/tasksLists";

const listTaskListByIdController = async (req: Request, res: Response) => {
  const taskList = await listTaskListByIdService(req.params.id);
  return res.status(201).send(taskList);
};
export default listTaskListByIdController;
