import {useMemo, useState} from 'react';

export interface ExpenseMeta {
  reason: string;
  amount: number;
}

export interface Expense extends ExpenseMeta {
  time: number;
}

const useExpenses = (): {
  expenses: Expense[];
  addExpense: (expense: ExpenseMeta) => void;
  totalExpenditure: number;
  resetExpenses: () => void;
} => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const totalExpenditure = useMemo(() => {
    return expenses.reduce((total, {amount}) => amount + total, 0);
  }, [expenses]);

  const addExpense = (expense: ExpenseMeta) =>
    setExpenses(oldExpenses => [
      ...oldExpenses,
      {...expense, time: new Date().getTime()},
    ]);

  return {
    totalExpenditure,
    expenses,
    addExpense,
    resetExpenses: () => setExpenses([]),
  };
};
export default useExpenses;
