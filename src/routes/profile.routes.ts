import { Router } from "express";
import { listProfileController } from "../controllers/profile";
import { ensureValidAutoLoginMiddleware } from "../middlewares";

const profileRouter = Router();

profileRouter.get(
  "/:token",
  ensureValidAutoLoginMiddleware,
  listProfileController
);

export default profileRouter;
