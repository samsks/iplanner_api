interface IFinanceRequest {
  title: string;
  isExpense: boolean;
  value: number;
  dueDate: Date;
}
interface IFinanceResponse {
  id?: string;
  title?: string;
  isExpense?: boolean;
  isAccomplished?: boolean;
  value?: number;
  dueDate?: Date;
}

interface IUpdateFinance {
  title?: string;
  isExpense?: boolean;
  isAccomplished?: boolean;
  value?: number;
  dueDate?: Date;
}

export { IFinanceRequest, IFinanceResponse, IUpdateFinance };
