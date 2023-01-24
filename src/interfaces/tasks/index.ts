import { ITaskListRes } from "../tasksLists";

interface ITaskReq {
  title: string;
  content: string;
  tasksListsId?: string;
}

interface ITaskRes {
  id?: string;
  title?: string;
  content?: string;
  isFinished?: boolean;
  isFavorited?: boolean;
  myDay?: boolean;
  tasksLists?: ITaskListRes;
}

interface ITaskUpdate {
  title?: string;
  content?: string;
  isFavorited?: boolean;
  isFinished?: boolean;
  myDay?: boolean;
}

interface ITaskUpdateRes {
  title: string;
  content: string;
  isFavorited: boolean;
  isFinished: boolean;
  myDay: boolean;
  id: string;
}

interface ITask {
  id: string;
  title: string;
  content: string;
  isFinished: boolean;
  isFavorited: boolean;
  myDay: boolean;
}

interface ITaskId {
  id?: string;
}

export { ITask, ITaskReq, ITaskRes, ITaskId, ITaskUpdate, ITaskUpdateRes };
