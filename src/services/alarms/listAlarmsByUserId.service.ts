import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { IAlarmRes } from "../../interfaces/alarms";
import { listAlarmsArrayResSerializer } from "../../serializers/alarms.serializers";

const listAlarmsByUserIdService = async (
  userId: string
): Promise<IAlarmRes[] | undefined> => {
  const userRepository = AppDataSource.getRepository(User);

  const findAlarmForUser = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      alarms: true,
    },
  });

  const ensureAlarmForUser = { ...findAlarmForUser };

  let { alarms } = ensureAlarmForUser;

  const newAlarmsList = alarms?.map((elem) => {
    let weekdaysResponse: number[] = [];

    const { weekdays, ...alarmRest } = elem;

    if (weekdays) {
      const aux = weekdays.split(",");

      weekdaysResponse = aux.map((e) => parseInt(e));
    }
    return { ...alarmRest, weekdays: weekdaysResponse };
  });

  const listAlarmResponse = await listAlarmsArrayResSerializer.validate(
    newAlarmsList,
    {
      stripUnknown: true,
    }
  );

  return listAlarmResponse;
};

export default listAlarmsByUserIdService;
