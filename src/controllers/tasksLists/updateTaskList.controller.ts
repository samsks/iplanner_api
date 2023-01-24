import { Request, Response } from "express";
import { updateTaskListService } from "../../services/tasksLists";

const updateTaskListController = async (req: Request, res: Response) => {
  const updatedTaskList = await updateTaskListService(req.params.id, req.body);
  return res.status(201).send(updatedTaskList);
};
export default updateTaskListController;
