import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  ITaskListReq,
  ITaskListRes,
  ITaskListUpdate,
} from "../interfaces/tasksLists";

const taskListSerializer: SchemaOf<ITaskListReq> = yup.object().shape({
  title: yup
    .string()
    .typeError("Must be a string")
    .max(20, "Must contain a maximum of 20 characters")
    .required("The title field is mandatory"),
});

const taskListResSerializer: SchemaOf<ITaskListRes> = yup.object().shape({
  tasks: yup.array(),
  title: yup.string(),
  id: yup.string().uuid(),
});

const updateTaskListSerializer: SchemaOf<ITaskListUpdate> = yup.object().shape({
  title: yup
    .string()
    .typeError("Must be a string")
    .max(20, "Must contain a maximum of 20 characters")
    .notRequired(),
});

const listAllTasksListsResSerializer: SchemaOf<ITaskListRes[]> = yup.array(
  taskListResSerializer
);

export {
  taskListSerializer,
  taskListResSerializer,
  listAllTasksListsResSerializer,
  updateTaskListSerializer,
};
