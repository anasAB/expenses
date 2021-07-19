import React, { useState } from 'react';
import Expenses from './Component/NewExpense/Expenses';
import NewExpense from './Component/NewExpense/NewExpense';
import { IApp, INewExpensive } from './Component/Typing/App'
import {IExpenses} from './Component/Typing/Expenses'

let dummy_Expenses : Array<IExpenses> = [
  { id: 1, title: 'Car insurance', cost: 250, date: new Date(2021, 2, 2), amount: 10.12 },
  { id: 2, title: 'Health insurance', cost: 240, date: new Date(2021, 3, 4), amount: 24.12 },
  { id: 3, title: 'Rent', cost: 230, date: new Date(2021, 4, 3), amount: 34.12 },
  { id: 4, title: 'Car insurance', cost: 220, date: new Date(2021, 5, 2), amount: 44.12 },
  { id: 5, title: 'Books', cost: 100, date: new Date(2019, 6, 1), amount: 54.12 },
  { id: 6, title: 'Utilities', cost: 50, date: new Date(2019, 5, 1), amount: 64.12 },
  { id: 7, title: 'Home expense', cost: 210, date: new Date(2020, 6, 1), amount: 74.12 },
  { id: 8, title: 'Vacations', cost: 210, date: new Date(2020, 6, 1), amount: 84.12 },
  { id: 9, title: 'Vacations', cost: 210, date: new Date(2020, 6, 1), amount: 94.12 },
]


const App = () => {
  let [expenses, setExpensesItem] = useState(dummy_Expenses);


  //**! Add new Expenses */
  const receiveNewExpensive = (newExpensive: INewExpensive)=> {
    setExpensesItem((prevExpenses:any) => {
      return [newExpensive, ...prevExpenses];
    });
  }

  //**! Delete Item */
  const deleteItem = (selectedItem: Number) => {
    const newExpensesList = expenses.filter((item: any) => item.id !== selectedItem);
    setExpensesItem(newExpensesList);
  }

  return (
    <div>
      <NewExpense receiveNewExpensive={receiveNewExpensive} />
      <Expenses expenses={expenses} deleteItem={deleteItem} />
    </div>
  )

}

export default App;



