// import React from 'react'
import ExpenseDate from '../ExpenseDate'
import { IExpenseItem } from '../Typing/ExpenseItem';

const ExpenseItem = (props: IExpenseItem) => {
    
    const selectItem = (id: number):void => {
        props.deleteItem(id)
    }

    return (
        <div>
            <div className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.cost}</div>
                </div>

                <div style={{ margin: '10px' }}>
                    <button type='button' onClick={() => selectItem(props.id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};


export default ExpenseItem