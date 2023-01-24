interface ITaskListUpdate {
  title?: string;
}

interface ITaskListUpdateRes {
  title?: string;
  id?: string;
}

interface ITaskListReq {
  title: string;
}

interface ITaskListRes {
  id?: string;
  title?: string;
}

export { ITaskListUpdate, ITaskListReq, ITaskListRes, ITaskListUpdateRes };
