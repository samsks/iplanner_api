import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { IUserReq, IUserRes } from "../../interfaces/users";
import { userResSerializer } from "../../serializers/users.serializer";

const createUserService = async (userData: IUserReq): Promise<IUserRes> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = userRepository.create(userData);
  await userRepository.save(user);

  const userResponse = await userResSerializer.validate(user, {
    stripUnknown: true,
  });

  return userResponse;
};

export default createUserService;
