import React from 'react'
import './ChartBar.css'

const ChartBar = (props: any) => {

    let barFillHeightPercentage: any = '0%'
    if (props.maxValue) {
        barFillHeightPercentage = Math.round((props.value / props.maxValue) * 100);
    }


    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{ height: barFillHeightPercentage, backgroundColor: barFillHeightPercentage > 50 ? 'red' : 'green' }}></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    )
}


export default ChartBar