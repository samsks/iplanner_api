import * as yup from "yup";
import { SchemaOf } from "yup";
import { ISession, ISessionRes } from "../interfaces/session";

const sessionSerializer: SchemaOf<ISession> = yup.object().shape({
  email: yup
    .string()
    .typeError("Must be a string")
    .email("Must be a valid email")
    .required("The email field is mandatory"),
  password: yup
    .string()
    .typeError("Must be a string")
    .required("The password field is mandatory"),
});
const sessionResSerializer: SchemaOf<ISessionRes> = yup.object().shape({
  token: yup.string(),
});

export { sessionSerializer, sessionResSerializer };
