import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense'

const NewExpense = (props) =>{
    return (
        <div className='new-expense'>
            <ExpenseForm receiveNewExpensive={props.receiveNewExpensive}/>
        </div>
    )
}

export default NewExpense