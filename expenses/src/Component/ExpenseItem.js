import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'


const ExpenseItem = (props) => {
    const { date, cost } = props
    
    const [title, setTitle] = useState(props.title);

    const ChangeTitleHandler = (title) => {
        setTitle('xxx')
    }

    return (
        <div className='expense-item' key={Math.random()}>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{cost}</div>
            </div>
            <button
                onClick={() => ChangeTitleHandler(title)}>change title
            </button>
        </div>
    )

}

export default ExpenseItem