import React, { useState } from 'react'
import ExpenseItem from "./Component/ExpenseItem";
import ExpenseForm from "./Component/NewExpense/ExpenseForm";
import ExpensesFilter from './Component/NewExpense/ExpensesFilter';
import NewExpense from './Component/NewExpense/NewExpense';

let expensesItem = [
  { title: 'Car insurance', cost: 250, date: new Date(2021, 2, 2) },
  { title: 'Health insurance', cost: 240, date: new Date(2021, 3, 4) },
  { title: 'Rent', cost: 230, date: new Date(2021, 4, 3) },
  { title: 'Car insurance', cost: 220, date: new Date(2021, 5, 2) },
  { title: 'Car insurance', cost: 210, date: new Date(2021, 6, 1) },
]


const App = () => {
  const [expenses, setExpensesItem] = useState({ expensesItem });
  const [filteredYear, setFilteredYear] = useState('2020');

  const receiveNewExpensive = (newExpensive) => {
    let newItem = expensesItem.push(newExpensive);
    setExpensesItem(newItem)
  }


  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }



  return (
    <div>
      <NewExpense receiveNewExpensive={receiveNewExpensive} />
      <ExpensesFilter selectedYear={filteredYear} onChangeFilter={changeFilterHandler} />
      {expensesItem.map(item => {
        return (
          <ExpenseItem key={Math.random()} title={item.title} cost={item.cost} date={item.date} amount={item.amount} />
        )
      })}
    </div>
  )

}

export default App;
