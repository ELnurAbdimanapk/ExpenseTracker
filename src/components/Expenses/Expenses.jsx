import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({ data }) => {
    const [filteredYear,setFilteredYear] = useState("2021")//ushul stateke ar kanday jyl bersek bolot
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = data.filter(expense => {//kelgen danniylardyn ichine kirip date degnedi alyp getfullyear metodun chygarabyz tolko jylyn alyp bereret
        return expense.date.getFullYear().toString() === filteredYear//eger jyly optiondagy jylga okshosh bolso oshogo salyp beret
    })

	return ( //knopkalar almashkan sayin filteredYeardin znacheniyasydda almashat
		<div className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {filteredExpenses.length === 0 ? <p style={{color:"white"}}>No such kind of Expenses</p> : (
                filteredExpenses.map((el) => {
                    return (
                        <ExpenseItem
                            key={el.id}
                            date={el.date}
                            title={el.title}
                            amount={el.amount}
                        />
                    );
                })
            )}  
			
			
			
			
			
			
			
			
			
			
		</div>
	);
};

export default Expenses;
