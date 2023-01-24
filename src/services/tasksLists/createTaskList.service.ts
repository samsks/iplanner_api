import AppDataSource from "../../data-source";
import { TaskList } from "../../entities";
import { ITaskReq } from "../../interfaces/tasks";
import { ITaskListRes } from "../../interfaces/tasksLists";
import { taskListResSerializer } from "../../serializers/tasksLists.serializer";

const createTaskListService = async (
  taskListData: ITaskReq
): Promise<ITaskListRes> => {
  const taskListRepository = AppDataSource.getRepository(TaskList);

  const newTaskList = taskListRepository.create({
    ...taskListData,
  });

  await taskListRepository.save(newTaskList);

  const validatedTaskList = await taskListResSerializer.validate(newTaskList, {
    abortEarly: false,
    stripUnknown: true,
  });

  return validatedTaskList;
};

export default createTaskListService;
