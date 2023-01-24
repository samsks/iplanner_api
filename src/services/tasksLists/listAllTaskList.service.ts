import AppDataSource from "../../data-source";
import { TaskList } from "../../entities";
import { ITaskListRes } from "../../interfaces/tasksLists";
import { listAllTasksListsResSerializer } from "../../serializers/tasksLists.serializer";

const listAllTaskListService = async (): Promise<
  ITaskListRes[] | undefined
> => {
  const taskListRepository = AppDataSource.getRepository(TaskList);

  const taskList = await taskListRepository.find();

  const listAllTaskListResponse = await listAllTasksListsResSerializer.validate(
    taskList,
    {
      stripUnknown: true,
    }
  );

  return listAllTaskListResponse;
};

export default listAllTaskListService;
