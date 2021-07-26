import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import './ExpenseForm.css'
import { IExpenseForm } from '../Typing/ExpenseForm'
import Button from './../UI/Button';

const ExpenseForm = (props: IExpenseForm) => {

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
        enteredCost: ''
    })

    const [formIsValid, setFormIsValid] = useState(false);


    useEffect(() => {
        const validation = setTimeout(() => {
            setFormIsValid(
                userInput.enteredTitle.trim().length > 4 &&
                +userInput.enteredAmount > 0
                && +userInput.enteredCost > 0
                && userInput.enteredDate.trim().length > 0
            );
        }, 500);

        return () => {
            clearTimeout(validation)
        }

    }, [userInput.enteredTitle, userInput.enteredAmount, userInput.enteredCost, userInput.enteredDate])


    const titleChangeHandler = (title: ChangeEvent<HTMLInputElement>) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: title.target.value }
        })
    }

    const amountChangeHandler = (amount: ChangeEvent<HTMLInputElement>) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: amount.target.value }
        })
    }

    const costChangeHandler = (cost: ChangeEvent<HTMLInputElement>) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredCost: cost.target.value }
        })
    }

    const dateChangeHandler = (date: ChangeEvent<HTMLInputElement>) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: date.target.value }
        })
    }

    /**
     *! handle submit Form
     */
    const SubmitFormHandler = (submitEvent: FormEvent<HTMLFormElement>) => {
        submitEvent.preventDefault();

        const newExpense: any = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            cost: +userInput.enteredCost,
            date: new Date(userInput.enteredDate),
            id: Math.random()
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
                enteredCost: '',
                enteredDate: ''
            }
        })
    }

    return (
        <form onSubmit={SubmitFormHandler} >
            <div className='new-expense__controls'>

                <div className='new-expense__control'>
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

                {/* <div className='new-expense button'>
                    <Button type='submit'  disabled ={!formIsValid}>Add Expense</Button>
                </div> */}

                <div className='actions'>
                    <Button type="submit" disabled={!formIsValid}>
                        Add Expense
                    </Button>
                </div>

            </div>
        </form>
    )
}

export default ExpenseForm