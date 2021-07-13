import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense'

const NewExpense = (props: any) => {
    return (
        <div className='new-expense'>
            <ExpenseForm receiveNewExpensive={props.receiveNewExpensive} />
        </div>
    )
}

export default NewExpense