import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError";

const ensureAlarmAllowedFieldsMiddleware =
  () => async (req: Request, res: Response, next: NextFunction) => {
    if (
      Object.keys(req.body).includes("id") ||
      Object.keys(req.body).includes("userId")
    ) {
      throw new AppError("Invalid fields", 401);
    }

    next();
  };

export default ensureAlarmAllowedFieldsMiddleware;
