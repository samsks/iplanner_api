import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError";
import { checkUUID } from "../../scripts";

const ensureValidUUIDMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.params.id) {
    const isParamsUUID = checkUUID({ uuid: req.params.id });

    if (!isParamsUUID) {
      throw new AppError("Incorrect id format", 400);
    }
  }

  let isBodyUUID;
  Object.keys(req.body).forEach((field) => {
    if (field.match(/(.*)Id$/)) {
      isBodyUUID = checkUUID({ uuid: req.body[field] });

      if (!isBodyUUID) {
        throw new AppError("Incorrect id format", 400);
      }
      return;
    }
  });

  return next();
};

export default ensureValidUUIDMiddleware;
