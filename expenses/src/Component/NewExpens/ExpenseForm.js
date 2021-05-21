import React from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    
    const titleChangeHandler =(event)=>{
        console.log('xxx',event.target.value);
    }

    return (
        <form>
            <div className='new-expense__controls'>

                <div className='new-expense__control'>
                    <label>title</label>
                    <input type='text' onChange={ titleChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='Date' min='2019-01-01' max='2022-12-31' />
                </div>

                    <button className='new-expense button' type='submit'>Add Expense</button>
                {/* <div >
                </div> */}

            </div>
        </form>
    )
}

export default ExpenseForm