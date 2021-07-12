import React from 'react'
import ExpenseDate from '../ExpenseDate'

const ExpenseItem = (props) => {
// console.log('xx',props);

    const selectItem =(id)=>{
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

                <div>
                    <button onClick={()=>selectItem(props.id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};


export default ExpenseItem