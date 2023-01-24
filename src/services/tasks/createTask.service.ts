import AppDataSource from "../../data-source";
import { Task, TaskList, User } from "../../entities";
import { ITaskReq, ITaskRes } from "../../interfaces/tasks";
import { taskResSerializer } from "../../serializers/tasks.serializer";

const createTaskService = async (taskData: ITaskReq, userId: string): Promise<ITaskRes> => {
  const userRepository = AppDataSource.getRepository(User);
  const tasksRepository = AppDataSource.getRepository(Task);
  const taskListRepository = AppDataSource.getRepository(TaskList);
  const taskList = await taskListRepository.findOneBy({
    id: taskData.tasksListsId,
  });

  const ensureTaskList = { ...taskList };

  const findUser = await userRepository.findOneBy({ id: userId });
  const ensureUser = { ...findUser };

  let createdTask = null;

  if (taskData.tasksListsId) {
    createdTask = tasksRepository.create({
      ...taskData,
      tasksLists: ensureTaskList,
      user: ensureUser,
    });
  } else {
    createdTask = tasksRepository.create({
      ...taskData,
      user: ensureUser,
    });
  }

  await tasksRepository.save(createdTask);
  const validatedTask = await taskResSerializer.validate(createdTask, {
    abortEarly: false,
    stripUnknown: true,
  });
  return validatedTask;
};
export default createTaskService;
