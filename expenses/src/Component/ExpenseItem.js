import React from 'react';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'


const ExpenseItem = (props) => {
    const { items } = props
    

    //TODO
    const ChangeTitleHandler = (expense) => {
        // let inputVal = document.getElementById("title");
    }

    const deleteExpenseItem = (deleteItem) => {
        props.deleteExpense(deleteItem);
    }


    return (
        items.length >= 0 ?
        items.map(item => {
                return (
                    <div className='expense-item' key={Math.random()} id={item.id}>
                        <ExpenseDate date={item.date} />

                        <div className='expense-item__description'>
                            <h2>{item.title}</h2>
                            <div className='expense-item__price' >${item.cost}</div>
                        </div>

                        <div>
                            <button className='expense-item__edit'
                                onClick={ChangeTitleHandler}>change title
                            </button>

                            <button className='expense-item__delete'
                                onClick={() => deleteExpenseItem(item.id)}>Delete
                            </button>
                        </div>
                    </div>
                )
            })
            : <p>Nothing</p>
    )


}

export default ExpenseItem

