import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (prop) => {
  const [displayForm, setDisplayForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    prop.onAddExpense(expenseData);
    setDisplayForm(false);
  };


  const newExpenseHandler = () => {
    setDisplayForm(true);
  };

  const cancelExpenseHandler = () => {
    setDisplayForm(false);
  }

  return (
    <div className="new-expense">
      {displayForm === true ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpense={cancelExpenseHandler} />
      ) : (
        <button onClick={newExpenseHandler}>Enter New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
