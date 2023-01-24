import AppDataSource from "../../data-source";
import { Alarm } from "../../entities";
import { IAlarmRes } from "../../interfaces/alarms";
import { listAlarmsArrayResSerializer } from "../../serializers/alarms.serializers";

const listAllAlarmsService = async (): Promise<IAlarmRes[] | undefined> => {
  const alarmRepository = AppDataSource.getRepository(Alarm);

  const allAlarms = await alarmRepository.find();

  const newAlarmsList = allAlarms?.map((elem) => {
    let weekdaysResponse: number[] = [];

    const { weekdays, ...alarmRest } = elem;

    if (weekdays) {
      const aux = weekdays.split(",");

      weekdaysResponse = aux.map((e) => parseInt(e));
    }
    return { ...alarmRest, weekdays: weekdaysResponse };
  });

  const allAlarmsResponse = await listAlarmsArrayResSerializer.validate(
    newAlarmsList,
    {
      stripUnknown: true,
    }
  );

  return allAlarmsResponse;
};

export default listAllAlarmsService;
