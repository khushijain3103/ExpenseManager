import logo from './logo.svg';
import './App.css';
import ExpenseItems from './compnents/expenses/ExpenseItems';
import NewExpense from './compnents/newExpense/NewExpense';
import ExpenseFilter from './compnents/expenseFilter/ExpenseFilter';

function App() {
  const expenses = [
    {
      title: "Shoes" ,
      date: new Date(22 ,2, 23) ,
      amount: "10$"
    },
    {
      title: "clothes" ,
      date:new Date(22 ,2, 23) ,
      amount: "10$"
    },
    {
      title: "laptop" ,
      date:new Date(22 ,2, 23),
      amount: "10$"
    },
    {
      title: "phone" ,
      date:new Date(22 ,2, 23),
      amount: "10$"
    },
]
const addExpenseHandler = ()=>{
    console.log("app") ; 
}
  return (
    
   <div>
       <NewExpense   onAddExpense={addExpenseHandler}/>
       <ExpenseFilter/>
       <ExpenseItems  title={expenses[0].title}  date= {expenses[0].date}  amount = {expenses[0].amount}/>
       <ExpenseItems  title={expenses[1].title}  date= {expenses[1].date}  amount = {expenses[1].amount}/>
       <ExpenseItems  title={expenses[2].title}  date= {expenses[2].date}  amount = {expenses[2].amount}/>
       <ExpenseItems  title={expenses[3].title}  date= {expenses[3].date}  amount = {expenses[3].amount}/>

    </div>
   
  );
}

export default App;
