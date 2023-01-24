import { Request, Response } from "express";
import { listFinanceByUserIdService } from "../../services/finances";

const listFinanceByUserIdController = async (req: Request, res: Response) => {
  const data = await listFinanceByUserIdService(req.params.id);
  return res.status(200).send(data);
};
export default listFinanceByUserIdController;
