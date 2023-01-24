import AppDataSource from "../../data-source";
import { Finance } from "../../entities";

const deleteFinanceService = async (financeId: string): Promise<void> => {
  const financeRepository = AppDataSource.getRepository(Finance);
  await financeRepository.delete(financeId);
  return;
};

export default deleteFinanceService;
