import { useState } from 'react';
import './ExpenseItems.css';
import ExpenseDate from '../expenseDate/ExpenseDate';




function ExpenseItems (props){

    const [ title , setTitle] = useState(props.title);

    const titleHandler = () => {
        setTitle('hehe');
        // console.log('hehe');
    }
    
    return(
        <div className="expense-item">
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className="expense-title">{title}</div>
            <div className="expense-rupees">{props.amount}</div>
            <div>
                <button  onClick={titleHandler}>edit</button>
            </div>
        </div>
        
    );
}

export default ExpenseItems