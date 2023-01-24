import AppDataSource from "../../data-source";
import { TaskList } from "../../entities";
import { ITaskRes } from "../../interfaces/tasks";
import { taskListResSerializer } from "../../serializers/tasksLists.serializer";

const listTaskListByIdService = async (
  taskListId: string
): Promise<ITaskRes> => {
  const taskListRepository = AppDataSource.getRepository(TaskList);

  const findTaskList = await taskListRepository.findOne({
    where: { id: taskListId },
    relations: { tasks: true },
  });

  const taskListResponse = await taskListResSerializer.validate(findTaskList, {
    stripUnknown: true,
  });

  return taskListResponse;
};

export default listTaskListByIdService;
