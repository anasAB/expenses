import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
        enteredCost:''
    })


    const titleChangeHandler = (title) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: title.target.value }
        })
    }

    const amountChangeHandler = (amount) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: amount.target.value }
        })
    }
 
    const costChangeHandler = (cost) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredCost: cost.target.value }
        })
    }

    const dateChangeHandler = (date) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: date.target.value }
        })
    }

    /**
     *! handle submit Form
     */
    const SubmitFormHandler = (submitEvent) => {
        submitEvent.preventDefault();
        const newExpense = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            cost:userInput.enteredCost,
            date: new Date(userInput.enteredDate)
        }

        props.receiveNewExpensive(newExpense)

        /**
         *! clear the inputs after the submit 
         */
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: '',
                enteredAmount: '',
                enteredCost:'',
                enteredDate: ''
            }
        })
    }
    return (
        <form onSubmit={SubmitFormHandler} id="myform">
            <div className='new-expense__controls'>

                <div id='title' className='new-expense__control'>
                    <label>title</label>
                    <input type='text' value={userInput.enteredTitle} placeholder='Title' onChange={titleChangeHandler} />
                </div>

                <div id='amount' className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={userInput.enteredAmount} placeholder='Amount' min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                
                <div id='cost' className='new-expense__control'>
                    <label>Cost</label>
                    <input type='number' value={userInput.enteredCost} placeholder='Cost' onChange={costChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='Date' value={userInput.enteredDate} placeholder='Date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>

                <div className='new-expense button'>
                    <button type='submit' disabled={userInput.enteredTitle ==='' || userInput.enteredAmount ==="" || userInput.enteredDate ==='' || userInput.enteredCost ===''} >Add Expense</button>
                </div>

            </div>
        </form>
    )
}

export default ExpenseForm