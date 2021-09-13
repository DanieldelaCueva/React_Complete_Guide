import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpenseList = (props) => {
  let expensesContent = <p>No expenses found.</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2> 
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expenseItem={expense.title}
          expenseAmount={expense.amount}
          expenseDate={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
