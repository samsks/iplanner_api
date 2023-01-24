import AppDataSource from "../../data-source";
import { Task } from "../../entities";

const deleteTaskService = async (taskId: string): Promise<void> => {
  const taskRepository = AppDataSource.getRepository(Task);
  await taskRepository.delete(taskId);
  return;
};
export default deleteTaskService;
