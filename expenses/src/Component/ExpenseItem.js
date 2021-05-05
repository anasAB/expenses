import React from 'react';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'


const ExpenseItem = (props) => {
    const { expensesItem } = props

    return expensesItem.map((item) => {


        return (
            <div className='expense-item' key={Math.random()}>
                <ExpenseDate date={item.date} />
                <div className='expense-item__description'>
                    <h2>{item.title}</h2>
                    <div className='expense-item__price'>{item.cost}</div>
                </div>
            </div>
        )
    }
    );




}

export default ExpenseItem