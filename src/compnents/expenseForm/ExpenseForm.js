import { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props){

    const [enteredTitle , setEnteredTitle] = useState('');
    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
    }
    const [enteredDate , setEnteredDate] = useState('');
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value);
    }
    const [enteredAmount , setEnteredAmount] = useState('');
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
    }

    const submitHandler = (event)=>{
        event.preventDefault();

        const submitData = {
            title: enteredTitle ,
            date: new Date(enteredDate),
            amount: enteredAmount
        }

       props.onSubmittingForm(submitData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }
    return(
        <div className='new-expense__controls'>
            <form  onSubmit={submitHandler}>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="text"value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <button>ADD</button>
            </form>
        </div>
    )
}

export default ExpenseForm 