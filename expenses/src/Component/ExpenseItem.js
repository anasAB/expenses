import React from 'react';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const { expensesItem } = props

    return expensesItem.map((item) => {

        const month = item.date.toLocaleString('de-DE', { month: 'long' })
        const day = item.date.toLocaleString('de-DE', { day: '2-digit' })
        const year = item.date.getFullYear()

        return (
            <div className='expense-item' key={Math.random()}>
                <div>
                    <div>{day}</div>
                    <div>{month}</div>
                    <div>{year}</div>
                </div>

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