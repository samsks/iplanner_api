import { Router } from "express";
import {
  listAllTaskController,
  createTaskController,
  deleteTaskController,
  listTasksByUserIdController,
  updateTaskController,
} from "../controllers/tasks";
import {
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware,
  ensureIsAdmMiddleware,
  ensureTaskIdExistsMiddleware,
  ensureTaskListIdExistsMiddleware,
  ensureUserIdExistsMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  ensureValidUUIDMiddleware,
} from "../middlewares";
import {
  taskSerializer,
  updateTaskSerializer,
} from "../serializers/tasks.serializer";

const taskRouter = Router();

taskRouter.post(
  "",
  ensureAuthMiddleware,
  ensureTaskListIdExistsMiddleware,
  ensureDataIsValidMiddleware(taskSerializer),
  createTaskController
);

taskRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureValidUUIDMiddleware,
  ensureTaskIdExistsMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  ensureDataIsValidMiddleware(updateTaskSerializer),
  updateTaskController
);
taskRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureValidUUIDMiddleware,
  ensureTaskIdExistsMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  deleteTaskController
);
taskRouter.get(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  listAllTaskController
);
taskRouter.get(
  "/users/:id",
  ensureAuthMiddleware,
  ensureValidUUIDMiddleware,
  ensureUserIdExistsMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  listTasksByUserIdController
);

export default taskRouter;
