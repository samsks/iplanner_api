import { Request, Response } from "express";
import { deleteTaskListService } from "../../services/tasksLists";

const deleteTaskListController = async (req: Request, res: Response) => {
  await deleteTaskListService(req.params.id);
  return res.status(204).send();
};
export default deleteTaskListController;
