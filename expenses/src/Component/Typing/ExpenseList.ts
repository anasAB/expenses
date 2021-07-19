import {IExpenses} from './Expenses';
export interface IExpenseList{
    deleteItem():void
    filteredExpenses:Array<IExpenses>
}

// export interface IExpense{
//     amount: number
//     cost: number
//     date: Date
//     id: number
//     title: string 
//   }