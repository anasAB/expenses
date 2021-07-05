import React, { useState } from 'react'
import ExpenseItem from "./Component/ExpenseItem";
import ExpensesFilter from './Component/NewExpense/ExpensesFilter';
import NewExpense from './Component/NewExpense/NewExpense';

let Dummy_Expenses = [
  { id: 1, title: 'Car insurance', cost: 250, date: new Date(2021, 2, 2) },
  { id: 2, title: 'Health insurance', cost: 240, date: new Date(2021, 3, 4) },
  { id: 3, title: 'Rent', cost: 230, date: new Date(2021, 4, 3) },
  { id: 4, title: 'Car insurance', cost: 220, date: new Date(2021, 5, 2) },
  { id: 5, title: 'Books', cost: 100, date: new Date(2019, 6, 1) },
  { id: 6, title: 'Utilities', cost: 50, date: new Date(2019, 5, 1) },
  { id: 7, title: 'Home expense', cost: 210, date: new Date(2020, 6, 1) },
  { id: 8, title: 'Vacations', cost: 210, date: new Date(2020, 6, 1) },
  { id: 9, title: 'Vacations', cost: 210, date: new Date(2020, 6, 1) },
]


const App = () => {
  const [expenses, setExpensesItem] = useState(Dummy_Expenses);
  const [filteredYear, setFilteredYear] = useState('2021');

  //**! Add new Expenses */
  const receiveNewExpensive = (newExpensive) => {
    let newItem = Dummy_Expenses.push(newExpensive);
    setExpensesItem(newItem)
  }

  //**! Filter Expenses By Year*/
  const changeFilterHandler = (selectedYear) => {
    let filteredExpensesByYear = Dummy_Expenses.filter(item => {
      return item.date.getFullYear().toString() === selectedYear
    })
    setExpensesItem(filteredExpensesByYear)
  }

  //**! Delete Expenses */
  const deleteExpense = (selectedExpense) => {
    const deletedItem = expenses.filter((item) => item.id !== selectedExpense);
    setExpensesItem(deletedItem)
    console.log('deletedItem', expenses);
  }




  //**! calculate total cost */
  // let totalCost = expenses.reduce(function (accumulator, filterExpenses) {
  //   return accumulator + filterExpenses.props.cost;
  // }, 0)


  return (
    <div>
      <NewExpense receiveNewExpensive={receiveNewExpensive} />
      <ExpensesFilter selectedYear={filteredYear} onChangeFilter={changeFilterHandler} />
      {/* <div style={{ marginLeft: '20px', fontSize: '20px', fontWeight: 'bold' }}>TotalCost: {totalCost}</div> */}
      <ExpenseItem items={expenses} key={Math.random()} deleteExpense={deleteExpense} />
    </div>
  )

}

export default App;



