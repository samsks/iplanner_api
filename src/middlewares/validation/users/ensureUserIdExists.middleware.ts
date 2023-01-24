import { Request, Response, NextFunction } from "express";
import { AppError } from "../../../errors/AppError";
import AppDataSource from "../../../data-source";
import { User } from "../../../entities";

const ensureUserIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id || req.body.userId;

  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userId,
  });

  if (!findUser) {
    throw new AppError("UserID not exists", 404);
  }

  return next();
};

export default ensureUserIdExistsMiddleware;
