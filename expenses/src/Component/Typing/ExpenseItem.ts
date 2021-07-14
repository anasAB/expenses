export interface IExpenseItem{
    amount: number,
    cost: number,
    date:Date,
    id: number,
    title: string,
    deleteItem(id:number):void 
}