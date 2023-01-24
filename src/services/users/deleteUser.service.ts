import AppDataSource from "../../data-source";
import { User, Alarm, Finance, Task, TaskList } from "../../entities";

const deleteUserService = async (userId: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);
  const alarmRepository = AppDataSource.getRepository(Alarm);
  const taskRepository = AppDataSource.getRepository(Task);
  const taskListRepository = AppDataSource.getRepository(TaskList);
  const financeRepository = AppDataSource.getRepository(Finance);

  const findUser = await userRepository.findOneBy({ id: userId });

  const findAlarms = await alarmRepository
    .createQueryBuilder("a")
    .innerJoinAndSelect("a.user", "user")
    .where("user.id = :id", { id: userId })
    .getMany();
  await alarmRepository.softRemove(findAlarms);

  const findFinance = await financeRepository
    .createQueryBuilder("f")
    .innerJoinAndSelect("f.user", "user")
    .where("user.id = :id", { id: userId })
    .getMany();
  await financeRepository.softRemove(findFinance);

  const findTasksLists = await taskListRepository
    .createQueryBuilder("tl")
    .innerJoinAndSelect("tl.tasks", "t")
    .innerJoinAndSelect("t.user", "user")
    .where("user.id = :id", { id: userId })
    .getMany();
  await taskListRepository.softRemove(findTasksLists);

  const findTasks = await taskRepository
    .createQueryBuilder("t")
    .innerJoinAndSelect("t.user", "user")
    .where("user.id = :id", { id: userId })
    .getMany();
  await taskRepository.softRemove(findTasks);

  await userRepository.softRemove(findUser!);
  await userRepository.save({ ...findUser, isDeleted: true });

  return;
};

export default deleteUserService;
