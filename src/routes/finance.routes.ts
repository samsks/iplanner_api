import { Router } from "express";
import {
  createFinanceController,
  updateFinanceController,
  listAllFinanceController,
  listFinanceByIdController,
  listFinanceByUserIdController,
  deleteFinanceController,
} from "../controllers/finances";
import {
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware,
  ensureFinanceIdExistsMiddleware,
  ensureIsAdmMiddleware,
  ensureUserIdExistsMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  ensureValidUUIDMiddleware,
} from "../middlewares";
import { financeSerializer, UpdateFinanceSerializer } from "../serializers/finance.serializer";

const financeRouter = Router();

financeRouter.post("", ensureAuthMiddleware, ensureDataIsValidMiddleware(financeSerializer), createFinanceController);
financeRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureValidUUIDMiddleware,
  ensureFinanceIdExistsMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  ensureDataIsValidMiddleware(UpdateFinanceSerializer),
  ensureFinanceIdExistsMiddleware,
  updateFinanceController
);

financeRouter.delete("/:id", ensureAuthMiddleware, ensureValidUUIDMiddleware, ensureFinanceIdExistsMiddleware, deleteFinanceController);
financeRouter.get("", ensureAuthMiddleware, ensureIsAdmMiddleware, listAllFinanceController);
financeRouter.get(
  "/:id",
  ensureAuthMiddleware,
  ensureValidUUIDMiddleware,
  ensureFinanceIdExistsMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  listFinanceByIdController
);
financeRouter.get(
  "/:id",
  ensureAuthMiddleware,
  ensureValidUUIDMiddleware,
  ensureFinanceIdExistsMiddleware,
  listFinanceByIdController,
  ensureUserIdExistsMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  listFinanceByUserIdController
);
financeRouter.get("/users/:id", ensureAuthMiddleware, ensureUserOwnerOrAdmMiddleware, ensureValidUUIDMiddleware, listFinanceByUserIdController);

export default financeRouter;
