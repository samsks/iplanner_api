import AppDataSource from "../../data-source";
import { Finance } from "../../entities";
import { IFinanceResponse } from "../../interfaces/finances";
import { listFinanceSerializer } from "../../serializers/finance.serializer";

const listAllFinanceService = async (): Promise<
  IFinanceResponse[] | undefined
> => {
  const financeRepo = AppDataSource.getRepository(Finance);
  const allFinance = await financeRepo.find();

  const validated = await listFinanceSerializer.validate(allFinance, {
    stripUnknown: true,
  });

  return validated;
};

export default listAllFinanceService;
