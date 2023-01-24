import AppDataSource from "../../data-source";
import { TaskList } from "../../entities";

const deleteTaskListService = async (taskListId: string): Promise<void> => {
  const taskListRepository = AppDataSource.getRepository(TaskList);
  await taskListRepository.delete(taskListId);
  return;
};
export default deleteTaskListService;
