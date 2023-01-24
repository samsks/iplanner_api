import { Request, Response } from "express";
import { deleteTaskService } from "../../services/tasks";

const deleteTaskController = async (req: Request, res: Response) => {
  await deleteTaskService(req.params.id);
  return res.status(204).send();
};
export default deleteTaskController;
