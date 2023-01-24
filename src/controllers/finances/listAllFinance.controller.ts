import { Request, Response } from "express";
import { listAllFinanceService } from "../../services/finances";

const listAllFinanceController = async (req: Request, res: Response) => {
  const data = await listAllFinanceService();
  return res.status(200).send(data);
};

export default listAllFinanceController;
