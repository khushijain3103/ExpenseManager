import './NewExpense.css';
import ExpenseForm from '../expenseForm/ExpenseForm';

function NewExpense(props){

    const onSubmittingFormHandler = (enteredExpenseData) => {

        const submitData = {
            ...enteredExpenseData ,
            id:Math.random().toString()
        }

        props.onAddExpense(submitData);
        console.log(submitData);

    }

    return(
        <div>
           <ExpenseForm    onSubmittingForm = {onSubmittingFormHandler}/> 
        </div>
    )

}

export default NewExpense;