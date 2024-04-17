export default interface ExpenseFormInterface {
  amount: number;
  description: string;
  merchant: string;
  client: string;
  project: string;
  //TODO: verificar se é date/string
  executedAt: string;
  expense_type: string;
  lunch: boolean;
}
