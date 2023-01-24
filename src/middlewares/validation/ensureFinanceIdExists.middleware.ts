import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError";
import AppDataSource from "../../data-source";
import { Finance } from "../../entities";

const ensureFinanceIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const financeId = req.params.id || req.body.financeId;

  const financeRepository = AppDataSource.getRepository(Finance);

  const findFinance = await financeRepository.findOneBy({
    id: financeId,
  });

  if (!findFinance) {
    throw new AppError("FinanceID not exists", 404);
  }

  return next();
};

export default ensureFinanceIdExistsMiddleware;
