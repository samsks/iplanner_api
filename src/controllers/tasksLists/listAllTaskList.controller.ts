import { Request, Response } from "express";
import { listAllTaskListService } from "../../services/tasksLists";

const listAllTaskListController = async (req: Request, res: Response) => {
  const data = await listAllTaskListService();
  return res.status(200).send(data);
};
export default listAllTaskListController;
