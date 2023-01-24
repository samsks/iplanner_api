import * as yup from "yup";
import { SchemaOf } from "yup";
import { IAlarmReq, IAlarmRes, IUpdateAlarm } from "../interfaces/alarms";

const alarmSerializer: SchemaOf<IAlarmReq> = yup.object().shape({
  time: yup
    .string()
    .typeError("Must be a string")
    .required("The time field is mandatory"),

  title: yup
    .string()
    .typeError("Must be a string")
    .max(20, "Must contain a maximum of 20 characters")
    .required("The title field is mandatory"),
});

const updatedAlarmSerializer: SchemaOf<IUpdateAlarm> = yup.object().shape({
  isActive: yup.boolean().typeError("Must be a boolean").notRequired(),
  time: yup.string().typeError("Must be a string").notRequired(),
  title: yup
    .string()
    .typeError("Must be a string")
    .max(20, "Must contain a maximum of 20 characters")
    .notRequired(),

  weekdays: yup
    .array()
    .typeError("Must be an array")
    .max(13, "Must contain a maximum of 13 characters")
    .notRequired(),
});

const alarmResSerializer: SchemaOf<IAlarmRes> = yup.object().shape({
  id: yup.string(),
  isActive: yup.boolean(),
  time: yup.string(),
  title: yup.string(),
  weekdays: yup.array(),
});

const listAlarmsArrayResSerializer: SchemaOf<IAlarmRes[]> = yup
  .array()
  .of(alarmResSerializer);

export {
  alarmSerializer,
  alarmResSerializer,
  updatedAlarmSerializer,
  listAlarmsArrayResSerializer,
};
