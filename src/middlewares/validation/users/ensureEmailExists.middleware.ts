import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../../data-source";
import { User } from "../../../entities";
import { AppError } from "../../../errors/AppError";

const ensureEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    email: req.body.email,
  });

  if (findUser) {
    throw new AppError("Email already registered", 409);
  }

  return next();
};

export default ensureEmailExistsMiddleware;
