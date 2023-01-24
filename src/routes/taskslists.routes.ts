import { Router } from "express";
import {
  createTaskListController,
  deleteTaskListController,
  updateTaskListController,
  listTaskListByIdController,
  listAllTaskListController,
} from "../controllers/tasksLists";
import {
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware,
  ensureIsAdmMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  ensureValidUUIDMiddleware,
  ensureTaskListIdExistsMiddleware,
  ensureUserIdExistsMiddleware,
} from "../middlewares";
import {
  taskListSerializer,
  updateTaskListSerializer,
} from "../serializers/tasksLists.serializer";

const taskListRouter = Router();

taskListRouter.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(taskListSerializer),
  createTaskListController
);

taskListRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureValidUUIDMiddleware,
  ensureTaskListIdExistsMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  ensureDataIsValidMiddleware(updateTaskListSerializer),
  updateTaskListController
);
taskListRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureValidUUIDMiddleware,
  ensureTaskListIdExistsMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  deleteTaskListController
);
taskListRouter.get(
  "users/:id",
  ensureAuthMiddleware,
  ensureValidUUIDMiddleware,
  ensureUserIdExistsMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  listTaskListByIdController
);
taskListRouter.get(
  "",
  ensureIsAdmMiddleware,
  ensureIsAdmMiddleware,
  listAllTaskListController
);

export default taskListRouter;
