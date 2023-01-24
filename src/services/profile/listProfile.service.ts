import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { IUserRes } from "../../interfaces/users";
import { userResSerializer } from "../../serializers/users.serializer";

const listProfileService = async (userId: string): Promise<IUserRes> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userId,
  });

  const resultUser = await userResSerializer.validate(findUser, {
    stripUnknown: true,
  });

  return resultUser;
};

export default listProfileService;
