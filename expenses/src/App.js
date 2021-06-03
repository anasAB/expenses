import React, { useState } from 'react'
import ExpenseItem from "./Component/ExpenseItem";
import ExpensesFilter from './Component/NewExpense/ExpensesFilter';
import NewExpense from './Component/NewExpense/NewExpense';

let Dummy_Expenses = [
  { title: 'Car insurance', cost: 250, date: new Date(2021, 2, 2) },
  { title: 'Health insurance', cost: 240, date: new Date(2021, 3, 4) },
  { title: 'Rent', cost: 230, date: new Date(2021, 4, 3) },
  { title: 'Car insurance', cost: 220, date: new Date(2021, 5, 2) },
  { title: 'Books', cost: 100, date: new Date(2019, 6, 1) },
  { title: 'Utilities', cost: 50, date: new Date(2019, 5, 1) },
  { title: 'Home expense', cost: 210, date: new Date(2020, 6, 1) },
  { title: 'Vacations', cost: 210, date: new Date(2020, 6, 1) },
  { title: 'Vacations', cost: 210, date: new Date(2020, 6, 1) },
]


const App = () => {
  const [expenses, setExpensesItem] = useState(Dummy_Expenses);
  const [filteredYear, setFilteredYear] = useState('2020');

  //**! Add new Expenses */
  const receiveNewExpensive = (newExpensive) => {
    let newItem = Dummy_Expenses.push(newExpensive);
    setExpensesItem(newItem)
  }

  //**! Delete Expenses */
  const deleteExpense = (selectedExpense) => {
    console.log('selectedExpense', selectedExpense);
  }


  //**! Filter Expenses By Year*/
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  let filterExpenses = Dummy_Expenses.filter(item => {
    return item.date.getFullYear().toString() === filteredYear
  })

  filterExpenses = filterExpenses.map(item => {
    return (
      <ExpenseItem key={Math.random()} title={item.title} cost={item.cost} date={item.date} amount={item.amount} deleteExpense={deleteExpense} />
    )
  })

  
  if (filterExpenses.length <= 0) {
    filterExpenses = <div style={{ textAlign: 'center' }}><h1>There are no expenses right now </h1></div>
  }
  
  //**! calculate total cost */
  let totalCost = filterExpenses.reduce(function (accumulator, filterExpenses) {
    return accumulator + filterExpenses.props.cost;
  }, 0)





  return (
    <div>
      <NewExpense receiveNewExpensive={receiveNewExpensive} />
      <ExpensesFilter selectedYear={filteredYear} onChangeFilter={changeFilterHandler} />
      <div style={{marginLeft:'20px', fontSize:'20px',fontWeight:'bold'}}>TotalCost: {totalCost}</div>
      {filterExpenses}
    </div>
  )

}

export default App;
