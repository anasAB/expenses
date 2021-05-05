import ExpenseItem from "./Component/ExpenseItem";

const expensesItem =[
  {title:'Car insurance', cost:250 , date: new Date(2021, 2, 2)},
  {title:'Health insurance', cost:240 , date: new Date(2021, 3, 4)},
  {title:'Rent', cost:230 , date: new Date(2021, 4, 3)},
  {title:'Car insurance', cost:220 , date: new Date(2021, 5, 2)},
  {title:'Car insurance', cost:210 , date: new Date(2021, 6, 1)},
]

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem expensesItem={expensesItem}/>
    </div>
  );
}

export default App;
