import React from 'react';
import './ExpenseItem.css'
import ExpenseItem from './NewExpense/ExpenseItem';


const ExpenseList = (props: any) => {

  if (props.filteredExpenses.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.filteredExpenses.map((expense: any) => (
        <ExpenseItem
          key={Math.random().toString()}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          cost={expense.cost}
          deleteItem={props.deleteItem}
        />
      ))}
    </ul>
  );
}

export default ExpenseList

