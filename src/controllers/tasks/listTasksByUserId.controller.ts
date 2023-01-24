import { Request, Response } from "express";
import { listTasksByUserIdService } from "../../services/tasks";

const listTasksByUserIdController = async (req: Request, res: Response) => {
  const data = await listTasksByUserIdService(req.params.id);
  return res.status(200).send(data);
};
export default listTasksByUserIdController;
