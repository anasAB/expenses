
export interface IExpenseForm{
    receiveNewExpensive(newExpense:IExpenses):void
}

interface IExpenses{
    // id?: string | number
    title: string
    cost: number
    date: Date
    amount:string
}


