import AppDataSource from "../../data-source";
import { Alarm } from "../../entities";
import { AppError } from "../../errors/AppError";
import { IAlarmRes } from "../../interfaces/alarms";
import { alarmResSerializer } from "../../serializers/alarms.serializers";

const listAlarmByIdService = async (
  alarmId: string,
  userId: string,
  userIsAdm: boolean
): Promise<IAlarmRes> => {
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

  let weekdaysResponse: number[] = [];

  const { weekdays } = alarm!;

  if (weekdays) {
    const aux = weekdays.split(",");

    weekdaysResponse = aux.map((e) => parseInt(e));
  }

  const alarmResponse = await alarmResSerializer.validate(
    {
      ...alarm,
      weekdays: weekdaysResponse,
    },
    {
      stripUnknown: true,
    }
  );

  return alarmResponse;
};

export default listAlarmByIdService;
