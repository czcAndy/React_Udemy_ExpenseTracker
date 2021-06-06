import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car insurance",
    amount: 295.3,
    date: new Date(2021, 6, 5),
  },
  {
    id: 2,
    title: "Charlie",
    amount: 15.2,
    date: new Date(2021, 6, 3),
  },
  {
    id: 3,
    title: "Apartament",
    amount: 502.3,
    date: new Date(2021, 6, 1),
  },
];

const App = () => {
  const [expenses, setExepenses] = useState(DUMMY_EXPENSES);

  const addExpenseDataHandler = (expenseData) => {
    setExepenses((previousExpenses) => {
      return [expenseData, ...previousExpenses];
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
