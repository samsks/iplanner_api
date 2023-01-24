import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../errors/AppError";

const ensureValidAutoLoginMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.params;

  if (!token) {
    throw new AppError("Invalid token", 401);
  }

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      let message = error.message;

      if (message.includes("jwt")) {
        message = message.replace("jwt", "token");
      }
      throw new AppError(message, 401);
    }

    req.user = {
      id: decoded.sub as string,
      isAdm: decoded.isAdm,
      isDeleted: decoded.isDeleted,
    };

    return next();
  });
};

export default ensureValidAutoLoginMiddleware;
