import AppDataSource from "../../data-source";
import { IUserReqUpdate, IUserRes } from "../../interfaces/users";
import { userResSerializer } from "../../serializers/users.serializer";
import { User } from "../../entities/";
import { Repository } from "typeorm";

const updateUserService = async (
  userData: IUserReqUpdate,
  userID: string
): Promise<IUserRes> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userID,
  });

  const updatedUser = userRepository.create({
    ...findUser,
    ...userData,
  });
  await userRepository.save(updatedUser);

  const userResponse = await userResSerializer.validate(updatedUser, {
    stripUnknown: true,
  });

  return userResponse;
};

export default updateUserService;
