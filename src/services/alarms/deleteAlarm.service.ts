import AppDataSource from "../../data-source";
import { Alarm } from "../../entities";
import { AppError } from "../../errors/AppError";

const deleteAlarmService = async (
  alarmId: string,
  userId: string,
  userIsAdm: boolean
): Promise<void> => {
  const alarmRepository = AppDataSource.getRepository(Alarm);
  const findAlarm = await alarmRepository.findOne({
    where: {
      id: alarmId,
    },
    relations: {
      user: true,
    },
  });
  const ensureAlarm = { ...findAlarm };

  const { user, ...alarm } = ensureAlarm;

  if (userIsAdm == false && user?.id != userId) {
    throw new AppError("Missing admin requisition", 401);
  }

  await alarmRepository.delete(alarmId);
  return;
};

export default deleteAlarmService;
