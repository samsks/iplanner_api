import { Request, Response } from "express";
import { listAllTaskService } from "../../services/tasks";

const listAllTaskController = async (req: Request, res: Response) => {
  const data = await listAllTaskService();
  return res.status(200).send(data);
};
export default listAllTaskController;
