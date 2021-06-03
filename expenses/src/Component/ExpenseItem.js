import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'


const ExpenseItem = (props) => {
    const { title, date, amount, cost } = props


    const ChangeTitleHandler = (expense) => {
        let inputVal = document.getElementById("title");
    }

    // const deleteExpenes = (deleteItem) =>{
    //     console.log('delete Item',deleteItem.target);
    // }

return (
    <div className='expense-item' key={Math.random()}>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price' >${cost}</div>
        </div>

        <div className='ex'>
            <button className='expense-item__edit'
                    onClick={ChangeTitleHandler}>change title
            </button>
            
            {/* <button className='expense-item__delete'
                    onClick={}>Delete
            </button> */}
        </div>
    </div>
    )

}

export default ExpenseItem