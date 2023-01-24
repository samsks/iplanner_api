import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { ITaskRes } from "../../interfaces/tasks";
import { listAllTasksResSerializer } from "../../serializers/tasks.serializer";

const listTasksByUserIdService = async (
  userId: string
): Promise<ITaskRes[] | undefined> => {
  const userRepository = AppDataSource.getRepository(User);

  const findTaskForUser = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      tasks: true,
    },
  });

  const ensureTaskForUser = { ...findTaskForUser };

  const listTasksResponse = await listAllTasksResSerializer.validate(
    ensureTaskForUser?.tasks,

    {
      stripUnknown: true,
    }
  );

  return listTasksResponse;
};

export default listTasksByUserIdService;
