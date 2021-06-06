import {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/ExpensesFilter/ExpensesFilter';

const App = () => {
  const [year, setyear] = useState(2022);
 
  const expenses = [
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

  const addExpenseDataHandler = (expenseData) => {
    console.log(expenseData);
  }

  const filterExpensesHandler = (date) => {
    setyear(date);
  }

  return (
    <div>
      <h2>Let's get started!</h2>   
      <NewExpense onAddExpense={addExpenseDataHandler}/>
      <ExpensesFilter onFilterExpenses={filterExpensesHandler}/>
      <Expenses items={expenses} filterExpenses={year}/>
    </div>
  );
}

export default App;
