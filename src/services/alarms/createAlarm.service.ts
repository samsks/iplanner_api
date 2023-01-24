import AppDataSource from "../../data-source";
import { Alarm, User } from "../../entities";
import { IAlarmReq, IAlarmRes } from "../../interfaces/alarms";
import { alarmResSerializer } from "../../serializers/alarms.serializers";

const createAlarmService = async (
  alarmReq: IAlarmReq,
  userId: string
): Promise<IAlarmRes> => {
  const alarmRepository = AppDataSource.getRepository(Alarm);
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id: userId });
  const ensureUser = { ...findUser };
  const newAlarm = alarmRepository.create({ ...alarmReq, user: ensureUser });

  await alarmRepository.save(newAlarm);

  const alarmResponse = await alarmResSerializer.validate(
    { ...newAlarm, weekdays: [] },
    {
      stripUnknown: true,
    }
  );

  return alarmResponse;
};

export default createAlarmService;
