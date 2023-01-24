import { Router } from "express";
import { createSessionController } from "../controllers/session";
import { ensureDataIsValidMiddleware } from "../middlewares";
import { sessionSerializer } from "../serializers/session.serializer";

const sessionRouter = Router();

sessionRouter.post(
  "",
  ensureDataIsValidMiddleware(sessionSerializer),
  createSessionController
);

export default sessionRouter;
