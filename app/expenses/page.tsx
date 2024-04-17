import CreateButton from '@/components/create-button';
import ExpenseForm from '@/components/forms/expense-form';
import React from 'react';

const Expense = () => {
  return (
    <div>
      <CreateButton />
      <ExpenseForm />
    </div>
  );
};

export default Expense;
