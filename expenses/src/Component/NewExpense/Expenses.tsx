import React, { useState } from 'react'
import Chart from '../Charts/Chart';
import ExpenseList from '../ExpenseList';
import ExpensesFilter from './ExpensesFilter';
import {IExpenses} from '../Typing/Expenses'

const Expenses = (props: any) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    //**! change selected Year 
    const changeFilterHandler = (selectedYear: string) : void  => {
        setFilteredYear(selectedYear)
    }

    //**! Filter Expenses By Year*/
    const filteredExpenses = props.expenses.filter((expenses: IExpenses) => {
        return expenses.date.getFullYear().toString() !== filteredYear
    })


    //**! calculate total cost */
    let totalCost: any = filteredExpenses.length >= 0 ? filteredExpenses.reduce(function (accumulator: any, MonthCostExpenses: any) {
        return accumulator += MonthCostExpenses.cost;
    }, 0) : <>lucky you</>

    //? let value = sumBy(filteredExpenses, 'cost');



    return (
        <div>
            <div style={{ marginLeft: '20px', fontSize: '20px', fontWeight: 'bold', color: totalCost > 500 ? 'red' : 'green' }}>TotalCost: {totalCost}</div>
            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={changeFilterHandler} />
            <Chart expenses={filteredExpenses} />
            <ExpenseList filteredExpenses={filteredExpenses} key={Math.random()} deleteItem={props.deleteItem} />
        </div>
    )
}

export default Expenses
