import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { IUserRes } from "../../interfaces/users";
import { listUsersAdmResSerializer } from "../../serializers/users.serializer";

const listAllUsersService = async (): Promise<IUserRes[] | undefined> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const allUsers = await userRepository.find();

  const allUsersResponse = await listUsersAdmResSerializer.validate(allUsers, {
    stripUnknown: true,
  });

  return allUsersResponse;
};

export default listAllUsersService;
