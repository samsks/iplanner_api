import AppDataSource from "../../data-source";
import { Finance } from "../../entities";
import { AppError } from "../../errors/AppError";
import { IUpdateFinance, IFinanceResponse } from "../../interfaces/finances";
import { financeResSerializer } from "../../serializers/finance.serializer";

const updateFinanceService = async (
  financeBody: IUpdateFinance,
  financeId: string,
  userId: string,
  userIsAdm: boolean
): Promise<IFinanceResponse> => {
  const financeRepo = AppDataSource.getRepository(Finance);

  const findFinance = await financeRepo.findOne({
    where: { id: financeId },
    relations: {
      user: true,
    },
  });

  const ensureFinance = { ...findFinance };

  const { user, ...finance } = ensureFinance;

  if (userIsAdm == false && user?.id != userId) {
    throw new AppError("Missing admin requisition", 401);
  }

  const updateFinance = financeRepo.create({
    ...finance,
    ...financeBody,
  });

  await financeRepo.save(updateFinance);

  const financeResponse = await financeResSerializer.validate(updateFinance, {
    stripUnknown: true,
  });

  return financeResponse;
};

export default updateFinanceService;
