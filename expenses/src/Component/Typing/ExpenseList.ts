export interface IExpenseList{
    deleteItem():void
    filteredExpenses:Array<IExpense>
}

export interface IExpense{
    amount: number
    cost: number
    date: Date
    id: number
    title: string 
  }