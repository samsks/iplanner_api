import AppDataSource from "../../data-source";
import { Alarm } from "../../entities";
import { AppError } from "../../errors/AppError";
import { IAlarmRes, IUpdateAlarm } from "../../interfaces/alarms";
import { alarmResSerializer } from "../../serializers/alarms.serializers";

const updateAlarmService = async (
  alarmReq: IAlarmRes,
  alarmId: string,
  userId: string,
  userIsAdm: boolean
): Promise<IUpdateAlarm> => {
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
  const { weekdays } = alarmReq;

  if (userIsAdm == false && user?.id != userId) {
    throw new AppError("Missing admin requisition", 401);
  }

  const updatedAlarm = alarmRepository.create({
    ...alarm,
    ...alarmReq,
    weekdays: weekdays?.toString(),
  });

  await alarmRepository.save(updatedAlarm);

  const alarmUpdatedResponse = await alarmResSerializer.validate({
    ...updatedAlarm,
    weekdays: weekdays,
  });

  return alarmUpdatedResponse;
};

export default updateAlarmService;
