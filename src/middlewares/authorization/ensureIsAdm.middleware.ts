import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError";

const ensureIsAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isAdm } = req.user;

  if (!isAdm) {
    throw new AppError("Missing admin permissions", 401);
  }

  next();
};

export default ensureIsAdmMiddleware;
