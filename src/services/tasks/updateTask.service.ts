import AppDataSource from "../../data-source";
import { Task } from "../../entities";
import { ITaskRes, ITaskUpdate } from "../../interfaces/tasks";
import { taskResSerializer } from "../../serializers/tasks.serializer";

const updateTaskService = async (
  taskId: string,
  newTaskData: ITaskUpdate
): Promise<ITaskRes> => {
  const taskRepository = AppDataSource.getRepository(Task);
  const task = await taskRepository.findOneBy({ id: taskId });
  const updatedTask = taskRepository.create({
    ...task,
    ...newTaskData,
  });

  const updatedResponse = await taskRepository.save(updatedTask);

  const tasksListsResponse = await taskResSerializer.validate(updatedResponse, {
    stripUnknown: true,
  });

  return tasksListsResponse;
};
export default updateTaskService;
