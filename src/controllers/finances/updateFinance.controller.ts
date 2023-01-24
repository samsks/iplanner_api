import { Request, Response } from "express";
import { updateFinanceService } from "../../services/finances";

const updateFinanceController = async (req: Request, res: Response) => {
  const data = await updateFinanceService(req.body, req.params.id, req.user.id, req.user.isAdm);
  return res.status(200).send(data);
};
export default updateFinanceController;
