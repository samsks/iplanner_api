import AppDataSource from "../../data-source";
import { TaskList } from "../../entities";
import { ITaskListRes, ITaskListUpdate } from "../../interfaces/tasksLists";
import { taskListResSerializer } from "../../serializers/tasksLists.serializer";

const updateTaskListService = async (
  taskListId: string,
  newTaskListData: ITaskListUpdate
): Promise<ITaskListRes> => {
  const taskListRepository = AppDataSource.getRepository(TaskList);
  const taskList = await taskListRepository.findOneBy({ id: taskListId });

  const updatedTaskList = taskListRepository.create({
    ...taskList,
    ...newTaskListData,
  });

  const updatedResponse = await taskListRepository.update(
    taskListId,
    updatedTaskList
  );

  const tasksListsResponse = await taskListResSerializer.validate(
    updatedResponse,
    {
      stripUnknown: true,
    }
  );

  return tasksListsResponse;
};
export default updateTaskListService;
