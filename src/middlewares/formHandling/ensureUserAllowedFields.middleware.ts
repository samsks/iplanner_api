import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError";

const ensureUserAllowedFieldsMiddleware =
  () => async (req: Request, res: Response, next: NextFunction) => {
    if (
      Object.keys(req.body).includes("id") ||
      Object.keys(req.body).includes("isAdm") ||
      Object.keys(req.body).includes("createdAt") ||
      Object.keys(req.body).includes("updatedAt") ||
      Object.keys(req.body).includes("deletedAt")
    ) {
      throw new AppError("Invalid fields", 401);
    }

    next();
  };

export default ensureUserAllowedFieldsMiddleware;
