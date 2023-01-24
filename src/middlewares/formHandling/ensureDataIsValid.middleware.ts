import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";
import { AppError } from "../../errors/AppError";

const ensureDataIsValidMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = await schema.validate(req.body, {
        abortEarly: true,
        stripUnknown: true,
      });

      req.body = validatedData;

      return next();
    } catch (err: any) {
      throw new AppError(err.errors, 400);
    }
  };

export default ensureDataIsValidMiddleware;
