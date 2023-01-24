import ensureAuthMiddleware from "./authentication/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "./formHandling/ensureDataIsValid.middleware";
import ensureEmailExistsMiddleware from "./validation/users/ensureEmailExists.middleware";
import ensureUserIdExistsMiddleware from "./validation/users/ensureUserIdExists.middleware";
import ensureValidAutoLoginMiddleware from "./validation/ensureValidAutoLogin.middleware";
import ensureAlarmAllowedFieldsMiddleware from "./formHandling/ensureAlarmAllowedFields.middleware";
import ensureFinanceAllowedFieldsMiddleware from "./formHandling/ensureFinanceAllowedFields.middleware";
import ensureTaskAllowedFieldsMiddleware from "./formHandling/ensureTaskAllowedFields.middleware";
import ensureTaskListAllowedFieldsMiddleware from "./formHandling/ensureTaskListAllowedFields.middleware";
import ensureUserAllowedFieldsMiddleware from "./formHandling/ensureUserAllowedFields.middleware";
import ensureValidUUIDMiddleware from "./validation/ensureValidUUID.middleware";
import ensureIsAdmMiddleware from "./authorization/ensureIsAdm.middleware";
import ensureFinanceIdExistsMiddleware from "./validation/finance/ensureFinanceIdExists.middleware";
import ensureAlarmIdExistsMiddleware from "./validation/alarms/ensureAlarmIdExists.middleware";
import ensureTaskIdExistsMiddleware from "./validation/tasks/ensureTaskIdExists.middleware";
import ensureTaskListIdExistsMiddleware from "./validation/tasksLists/ensureTaskListIdExists.middleware";
import ensureUserOwnerOrAdmMiddleware from "./authorization/ensureUserOwnerOrAdm.middleware";
import ensureTaskListNotExistsMiddleware from "./validation/tasksLists/ensureTaskListNotExists.middleware";

//authentication
export { ensureAuthMiddleware };

//authorization
export { ensureIsAdmMiddleware, ensureUserOwnerOrAdmMiddleware };

//form handling
export {
  ensureAlarmAllowedFieldsMiddleware,
  ensureDataIsValidMiddleware,
  ensureFinanceAllowedFieldsMiddleware,
  ensureTaskAllowedFieldsMiddleware,
  ensureTaskListAllowedFieldsMiddleware,
  ensureUserAllowedFieldsMiddleware,
};

//validation
//all
export { ensureValidAutoLoginMiddleware, ensureValidUUIDMiddleware };
//users
export { ensureEmailExistsMiddleware, ensureUserIdExistsMiddleware };
//alarms
export { ensureAlarmIdExistsMiddleware };
//finance
export { ensureFinanceIdExistsMiddleware };
//task
export { ensureTaskIdExistsMiddleware };
//taskList
export { ensureTaskListIdExistsMiddleware, ensureTaskListNotExistsMiddleware };
