import ExpensesList from './ExpensesList';
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import "./ExpenseDisplay.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart"

const ExpensesDisplay = (props) => {

  const [filteredYear, setFilteredYear] = useState("2020");

  const fliterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={fliterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default ExpensesDisplay;
