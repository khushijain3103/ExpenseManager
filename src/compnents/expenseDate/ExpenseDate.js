function ExpenseDate(props){
    const date = props.date.toLocaleString('en-US',{day:'2-digit'});
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const year = props.date.getFullYear();
    return(
        <div>
            <div>{date}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    )
}

export default ExpenseDate;