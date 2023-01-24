import {
  IUserReq,
  IUserReqUpdate,
  IUserRes,
  IUserAdmRes,
} from "../interfaces/users";
import * as yup from "yup";
import { SchemaOf } from "yup";
import moment from "moment";

const userSerializer: SchemaOf<IUserReq> = yup.object().shape({
  email: yup
    .string()
    .typeError("Must be a string")
    .email("Invalid email")
    .max(60, "Must contain a maximum of 60 characters")
    .required("The email field is mandatory"),
  name: yup
    .string()
    .typeError("Must be a string")
    .max(100, "Must contain a maximum of 100 characters")
    .required("The name field is mandatory"),
  password: yup
    .string()
    .typeError("Must be a string")
    .required("The password field is mandatory")
    .matches(/[A-Z]/, "Must contain at least one capital letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/(\d)/, "Must contain at least one number")
    .matches(/(\W)|_/, "Must contain at least one special character")
    .matches(/.{8,}/, "Must contain at least 8 characters"),
  birthDate: yup
    .date()
    .typeError("Must be a date")
    .test("is-valid-date", "Invalid date", (value) =>
      value ? moment(value, "YYYY-MM-DD", true).isValid() : true
    )
    .test(
      "is-valid-format",
      "Invalid format, it should be in the format yyyy-mm-dd",
      (value) => (value ? moment(value, "YYYY-MM-DD", true).isValid() : true)
    )
    .required("The birthDate field is mandatory"),
  profileImg: yup.string().typeError("Must be a string").notRequired(),
});

const updateUserSerializer: SchemaOf<IUserReqUpdate> = yup.object().shape({
  name: yup
    .string()
    .typeError("Must be a string")
    .max(100, "Must contain a maximum of 100 characters")
    .notRequired(),
  email: yup
    .string()
    .email("Must be a valid email")
    .typeError("Must be a string")
    .max(60, "Must contain a maximum of 60 characters")
    .notRequired(),
  password: yup
    .string()
    .typeError("Must be a string")
    .notRequired()
    .matches(/[A-Z]/, "Must contain at least one capital letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/(\d)/, "Must contain at least one number")
    .matches(/(\W)|_/, "Must contain at least one special character")
    .matches(/.{8,}/, "Must contain at least 8 characters"),
  birthDate: yup
    .date()
    .test("is-valid-date", "Invalid date", (value) =>
      value ? moment(value, "YYYY-MM-DD", true).isValid() : true
    )
    .test(
      "is-valid-format",
      "Invalid format, it should be in the format yyyy-mm-dd",
      (value) => (value ? moment(value, "YYYY-MM-DD", true).isValid() : true)
    )
    .notRequired(),
  profileImg: yup.string().typeError("Must be a string").notRequired(),
});

const userResSerializer: SchemaOf<IUserRes> = yup.object().shape({
  id: yup.string().uuid(),
  email: yup.string().email(),
  name: yup.string(),
  birthDate: yup.date(),
  profileImg: yup.string().nullable(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
});

const listUserResSerializer = yup.array(userResSerializer);

const usersAdmResSerializer: SchemaOf<IUserAdmRes> = yup.object().shape({
  id: yup.string().uuid(),
  email: yup.string().email(),
  name: yup.string(),
  isAdm: yup.boolean(),
  isActive: yup.boolean(),
  birthDate: yup.date(),
  profileImg: yup.string().nullable(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
  deletedAt: yup.date().nullable(),
});

const listUsersAdmResSerializer: SchemaOf<IUserAdmRes[]> = yup.array(
  usersAdmResSerializer
);

const userProfileResSerializer: SchemaOf<IUserRes> = yup.object().shape({
  id: yup.string().uuid(),
  email: yup.string().email(),
  name: yup.string(),
  birthDate: yup.date(),
  profileImg: yup.string(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
})

export {
  userSerializer,
  userResSerializer,
  usersAdmResSerializer,
  userProfileResSerializer,
  listUserResSerializer,
  listUsersAdmResSerializer,
  updateUserSerializer,
};
