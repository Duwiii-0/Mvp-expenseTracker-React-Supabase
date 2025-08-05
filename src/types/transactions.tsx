interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: string; // or Date, depending on usage
  type: 'income' | 'expense';
  category_id: string;
  user_id: string;
}

export type { Transaction }; 