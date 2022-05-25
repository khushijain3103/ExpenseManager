import './ExpenseFilter.css';

function ExpenseFilter (){
    return(
        <div>
            <label>Select Year</label>
            <select name='year' id='year'>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
            </select>
        </div>
    )
}

export default  ExpenseFilter