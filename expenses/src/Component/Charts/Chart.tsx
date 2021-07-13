// import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'
import { IExpenses } from '../Typing/Chart'

let chartDataMonthly = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
]

const Chart = (props: any) => {

    const { expenses } = props

    //! update Monthly expenses Value
    for (let i of expenses) {
        const expenseMonth = i.date.getMonth()
        chartDataMonthly[expenseMonth].value += i.amount
    }


    //! get most expensive month
    let MonthlyValue = chartDataMonthly.map(month => month.value)
    let totalMax = Math.max(...MonthlyValue)

    return (
        <div className='chart'>
            {chartDataMonthly.map(data => <ChartBar key={Math.random()} value={data.value} maxValue={totalMax} label={data.label} />)}
        </div>
    )
}

export default Chart