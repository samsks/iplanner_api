import { Router } from "express";
import {
  createAlarmController,
  listAlarmsByUserIdController,
  listAllAlarmsController,
  updateAlarmController,
  listAlarmByIdController,
  deleteAlarmController,
} from "../controllers/alarms";
import {
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  ensureValidUUIDMiddleware,
  ensureIsAdmMiddleware,
  ensureAlarmIdExistsMiddleware,
  ensureUserIdExistsMiddleware,
} from "../middlewares";

import {
  alarmSerializer,
  updatedAlarmSerializer,
} from "../serializers/alarms.serializers";

const alarmRouter = Router();

alarmRouter.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(alarmSerializer),
  createAlarmController
);

alarmRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureValidUUIDMiddleware,
  ensureAlarmIdExistsMiddleware,
  //ensureUserOwnerOrAdmMiddleware,
  ensureDataIsValidMiddleware(updatedAlarmSerializer),
  updateAlarmController
);

alarmRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureValidUUIDMiddleware,
  ensureAlarmIdExistsMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  deleteAlarmController
);

alarmRouter.get(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  listAllAlarmsController
);

alarmRouter.get(
  "/:id",
  ensureAuthMiddleware,
  ensureValidUUIDMiddleware,
  ensureAlarmIdExistsMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  listAlarmByIdController
);

alarmRouter.get(
  "/users/:id",
  ensureAuthMiddleware,
  ensureValidUUIDMiddleware,
  ensureUserIdExistsMiddleware,
  ensureUserOwnerOrAdmMiddleware,
  listAlarmsByUserIdController
);

export default alarmRouter;
