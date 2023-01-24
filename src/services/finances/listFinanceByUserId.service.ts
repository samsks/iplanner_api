import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { IFinanceResponse } from "../../interfaces/finances";
import { listFinanceSerializer } from "../../serializers/finance.serializer";

const listFinanceByUserIdService = async (
  userId: string
): Promise<IFinanceResponse[] | undefined> => {
  const userRepository = AppDataSource.getRepository(User);

  const findFinanceForUser = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      finance: true,
    },
  });

  const listFinanceResponse = await listFinanceSerializer.validate(
    findFinanceForUser?.finance,
    {
      stripUnknown: true,
    }
  );

  return listFinanceResponse;
};

export default listFinanceByUserIdService;
