import React,{useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [userInput,setUserInput] = useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:'' 
   }) 

    const titleChangeHandler =(title)=>{
      setUserInput((prevState)=>{
          return{...prevState,enteredTitle:title.target.value}
      })
    }

    const amountChangeHandler =(amount)=>{
        setUserInput((prevState)=>{
           return{ ...prevState,enteredAmount:amount.target.value}
        })
    }

    const dateChangeHandler =(date)=>{
        setUserInput((prevState) => {
            return{...prevState,enteredDate:date.target.value}
        })
    }

    /**
     *! handle submit Form
     */
    const SubmitFormHandler = (submitEvent) =>{
        submitEvent.preventDefault();
        const newExpense = {
            title : userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }

        /**
         *! clear the inputs after the submit 
         */
        setUserInput((prevState) => {
            return{
                ...prevState,
                enteredTitle:'',
                enteredAmount:'',
                enteredDate:''
            }
        })
    }



    return (
        <form onSubmit = {SubmitFormHandler}>
            <div className='new-expense__controls'>

                <div className='new-expense__control'>
                    <label>title</label>
                    <input type='text' value={userInput.enteredTitle} placeholder='Title' onChange={ titleChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={userInput.enteredAmount} placeholder='Amount' min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='Date' value={userInput.enteredDate} placeholder='Date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
                </div>

                    <button className='new-expense button' type='submit'>Add Expense</button>
                {/* <div >
                </div> */}

            </div>
        </form>
    )
}

export default ExpenseForm