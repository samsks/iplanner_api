import AppDataSource from "../../data-source";
import { Finance } from "../../entities";
import { IFinanceResponse } from "../../interfaces/finances";
import { financeResAdmSerializer } from "../../serializers/finance.serializer";
const listFinanceByIdService = async (
  financeId: string
): Promise<IFinanceResponse> => {
  const financeRepo = AppDataSource.getRepository(Finance);

  const finance = await financeRepo.findOne({
    where: { id: financeId },
    relations: { user: true },
  });

  const validated = await financeResAdmSerializer.validate(finance, {
    stripUnknown: true,
  });

  return validated;
};

export default listFinanceByIdService;
