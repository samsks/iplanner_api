import { Router } from "express";
import {
  createUserController,
  listAllUsersController,
  listUserByIdController,
  updateUserController,
  deleteUserController,
} from "../controllers/users";
import {
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware,
  ensureEmailExistsMiddleware,
  ensureIsAdmMiddleware,
  ensureUserIdExistsMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  ensureValidUUIDMiddleware,
} from "../middlewares";
import {
  updateUserSerializer,
  userSerializer,
} from "../serializers/users.serializer";

const userRouter = Router();

userRouter.post(
  "",
  ensureDataIsValidMiddleware(userSerializer),
  ensureEmailExistsMiddleware,
  createUserController
);
userRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureValidUUIDMiddleware,
  ensureUserIdExistsMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  ensureDataIsValidMiddleware(updateUserSerializer),
  updateUserController
);
userRouter.get(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  listAllUsersController
);

userRouter.get(
  "/:id",
  ensureAuthMiddleware,
  ensureValidUUIDMiddleware,
  ensureUserIdExistsMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  listUserByIdController
);

userRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureValidUUIDMiddleware,
  ensureUserIdExistsMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  deleteUserController
);

export default userRouter;
