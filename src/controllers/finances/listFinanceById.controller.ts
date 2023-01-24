import { Request, Response } from "express";
import { listFinanceByIdService } from "../../services/finances";

const listFinanceByIdController = async (req: Request, res: Response) => {
  const data = await listFinanceByIdService(req.params.id);
  return res.status(200).send(data);
};

export default listFinanceByIdController;
