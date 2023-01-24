import AppDataSource from "../../data-source";
import { Finance, User } from "../../entities";
import { IFinanceRequest, IFinanceResponse } from "../../interfaces/finances";
import { financeResSerializer } from "../../serializers/finance.serializer";

const createFinanceService = async (
  financeData: IFinanceRequest,
  userId: string
): Promise<IFinanceResponse> => {
  const financeRepo = AppDataSource.getRepository(Finance);
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ id: userId });
  const ensureUser = { ...user };

  const newFinance = financeRepo.create({ ...financeData, user: ensureUser });

  await financeRepo.save(newFinance);

  const financeResponse = await financeResSerializer.validate(newFinance, {
    stripUnknown: true,
  });

  return financeResponse;
};

export default createFinanceService;
