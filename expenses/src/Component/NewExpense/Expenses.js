import React, { useState } from 'react'
import Chart from '../Charts/Chart';
import ExpenseList from '../ExpenseList';
import ExpensesFilter from './ExpensesFilter';
// import {sumBy} from 'lodash';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022');

    //**! change selected Year 
    const changeFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    //**! Filter Expenses By Year*/
    const filteredExpenses = props.expenses.filter((expenses) => {
        return expenses.date.getFullYear().toString() === filteredYear
    })
   
    
    console.log('filteredExpenses',filteredExpenses);
    //**! calculate total cost */
    let totalCost = filteredExpenses.length >= 0 ? filteredExpenses.reduce(function (accumulator, MonthCostExpenses) {
        return accumulator += MonthCostExpenses.cost;
    }, 0) : <>lucky you</>

    //? let value = sumBy(filteredExpenses, 'cost');


    return (
        <div>
            <div style={{ marginLeft: '20px', fontSize: '20px', fontWeight: 'bold', color: totalCost > 500 ? 'red' : 'green' }}>TotalCost: {totalCost}</div>
            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={changeFilterHandler} />
            <Chart expenses={filteredExpenses}/>
            <ExpenseList filteredExpenses={filteredExpenses} key={Math.random()} />
        </div>
    )
}

export default Expenses
