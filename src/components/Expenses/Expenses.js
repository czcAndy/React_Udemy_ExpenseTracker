import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = () => {
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

  return (
    <Card className='expenses'>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
