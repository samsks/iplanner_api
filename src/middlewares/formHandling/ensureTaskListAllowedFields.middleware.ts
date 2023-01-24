import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError";

const ensureTaskListAllowedFieldsMiddleware =
  () => async (req: Request, res: Response, next: NextFunction) => {
    if (Object.keys(req.body).includes("id")) {
      throw new AppError("Invalid fields", 401);
    }

    next();
  };

export default ensureTaskListAllowedFieldsMiddleware;
