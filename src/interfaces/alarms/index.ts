interface IAlarmReq {
  time: string;
  title: string;
}

interface IAlarmRes {
  id?: string;
  isActive?: boolean;
  time?: string;
  title?: string;
  weekdays?: number[];
}

interface IUpdateAlarm {
  isActive?: boolean;
  time?: string;
  title?: string;
  weekdays?: number[];
}

export { IAlarmReq, IAlarmRes, IUpdateAlarm };
