import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IFinanceRequest,
  IFinanceResponse,
  IUpdateFinance,
} from "../interfaces/finances";
import { usersAdmResSerializer } from "./users.serializer";

const financeSerializer: SchemaOf<IFinanceRequest> = yup.object().shape({
  title: yup
    .string()
    .typeError("Must be a string")
    .max(60, "Must contain a maximum of 60 characters")
    .required("The title field is mandatory"),
  value: yup
    .number()
    .typeError("Must be a number")
    .positive("Must be greater than zero")
    .required("The value field is mandatory"),
  dueDate: yup
    .date()
    .typeError("Must be a date")
    .required("The dueDate field is mandatory"),
  isExpense: yup
    .boolean()
    .typeError("Must be a boolean")
    .required("The isExpense field is mandatory"),
});

const financeResSerializer: SchemaOf<IFinanceResponse> = yup.object().shape({
  title: yup.string(),
  value: yup.number(),
  dueDate: yup.date(),
  isAccomplished: yup.boolean(),
  isExpense: yup.boolean(),
  id: yup.string().uuid(),
});

const financeResAdmSerializer: SchemaOf<IFinanceResponse> = yup.object().shape({
  user: usersAdmResSerializer,
  title: yup.string(),
  value: yup.number(),
  dueDate: yup.date(),
  isAccomplished: yup.boolean(),
  isExpense: yup.boolean(),
  id: yup.string().uuid(),
});

const UpdateFinanceSerializer: SchemaOf<IUpdateFinance> = yup.object().shape({
  title: yup
    .string()
    .typeError("Must be a string")
    .max(60, "Must contain a maximum of 60 characters")
    .notRequired(),
  isAccomplished: yup.boolean().typeError("Must be a boolean").notRequired(),
  isExpense: yup.boolean().typeError("Must be a boolean").notRequired(),
  value: yup
    .number()
    .typeError("Must be a number")
    .positive("Must be greater than zero")
    .notRequired(),
  dueDate: yup.date().typeError("Must be a date").notRequired(),
});

const listFinanceSerializer: SchemaOf<IFinanceResponse[]> =
  yup.array(financeResSerializer);

export {
  financeSerializer,
  financeResSerializer,
  UpdateFinanceSerializer,
  listFinanceSerializer,
  financeResAdmSerializer,
};
