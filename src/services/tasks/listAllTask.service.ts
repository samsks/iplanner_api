import AppDataSource from "../../data-source";
import { Task } from "../../entities";
import { ITaskRes } from "../../interfaces/tasks";
import { listAllTasksResSerializer } from "../../serializers/tasks.serializer";

const listAllTaskService = async (): Promise<ITaskRes[] | undefined> => {
  const taskRepo = AppDataSource.getRepository(Task);

  const tasks = await taskRepo.find();

  const listAllTasksResponse = await listAllTasksResSerializer.validate(tasks, {
    stripUnknown: true,
  });

  return listAllTasksResponse;
};
export default listAllTaskService;
