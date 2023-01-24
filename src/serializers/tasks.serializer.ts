import * as yup from "yup";
import { SchemaOf } from "yup";
import { ITaskReq, ITaskRes, ITaskUpdate } from "../interfaces/tasks";

const taskSerializer: SchemaOf<ITaskReq> = yup.object().shape({
  tasksListsId: yup
    .string()
    .typeError("Must be a string")
    .uuid()
    .typeError("Must be a UUID"),
  content: yup
    .string()
    .typeError("Must be a string")

    .max(200, "Must contain a maximum of 200 characters")

    .required("The content field is mandatory"),
  title: yup
    .string()
    .typeError("Must be a string")
    .max(50, "Must contain a maximum of 50 characters")
    .required("The title field is mandatory"),
});

const taskResSerializer: SchemaOf<ITaskRes> = yup.object().shape({
  tasksLists: yup.object().shape({
    id: yup.string(),
    title: yup.string(),
  }),
  isFavorited: yup.boolean(),
  isFinished: yup.boolean(),
  myDay: yup.boolean(),
  content: yup.string(),
  title: yup.string(),
  id: yup.string().uuid(),
});

const updateTaskSerializer: SchemaOf<ITaskUpdate> = yup.object().shape({
  tasksListsId: yup
    .string()
    .typeError("Must be a string")
    .uuid()
    .typeError("Must be a UUID")
    .notRequired(),
  content: yup
    .string()
    .typeError("Must be a string")

    .max(200, "Must contain a maximum of 200 characters")

    .notRequired(),
  title: yup
    .string()
    .typeError("Must be a string")
    .max(50, "Must contain a maximum of 50 characters")
    .notRequired(),
  isFavorited: yup.boolean().notRequired(),
  isFinished: yup.boolean().notRequired(),
  myDay: yup.boolean().notRequired(),
});

const listAllTasksResSerializer: SchemaOf<ITaskRes[]> =
  yup.array(taskResSerializer);

export {
  taskSerializer,
  taskResSerializer,
  listAllTasksResSerializer,
  updateTaskSerializer,
};
