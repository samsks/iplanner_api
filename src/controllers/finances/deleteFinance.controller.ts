import { Request, Response } from "express";
import { deleteFinanceService } from "../../services/finances";

const deleteFinanceController = async (req: Request, res: Response) => {
  await deleteFinanceService(req.params.id);
  return res.status(204).send();
};
export default deleteFinanceController;
