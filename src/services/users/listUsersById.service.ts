import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { IUserRes } from "../../interfaces/users";
import { userResSerializer } from "../../serializers/users.serializer";

const listUserByIdService = async (userId: string): Promise<IUserRes> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const getUserById = await userRepository.findOneBy({ id: userId });

  const getUserByIdRes = await userResSerializer.validate(getUserById, {
    stripUnknown: true,
  });

  return getUserByIdRes;
};

export default listUserByIdService;
