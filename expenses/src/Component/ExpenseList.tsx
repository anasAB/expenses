import React from 'react';
import './ExpenseItem.css'
import ExpenseItem from './NewExpense/ExpenseItem';
import { IExpenseList } from './Typing/ExpenseList'
import { IExpenses } from './Typing/Expenses'



const ExpenseList = (props: IExpenseList) => {

  if (props.filteredExpenses.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }


  return (
    <ul className='expenses-list'>
      {props.filteredExpenses.map((expense: IExpenses) => {
        let id: number | string = expense.id ?? Math.random().toString();

        return (<ExpenseItem
          key={Math.random()}
          id={id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          cost={expense.cost}
          deleteItem={props.deleteItem}
        />)

      }

      )}
    </ul>
  );
}

export default ExpenseList

