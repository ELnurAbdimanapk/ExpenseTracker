import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import AddExpense from './components/NewExpenses/AddExpense';
import { expenses } from './data';

function App() {
  const [data,setData] =useState(expenses)
	// const saveDataToArrayHandler = (formData) => {
    // setData(prevState => {
    //   return [...prevState,formData]  //eski massivke jany bir massiv achtykta eski massivdegi danniylardy copy kylyp aga bir obyekt koshup koyduk
      
    // })

	// };
	const fetchDataHandler = async() => {
		try{
			const response = await fetch("https://expense-tracker-8435e-default-rtdb.firebaseio.com/data.json")
			const expense = await response.json();


			const loadedExpense = []
			for (const key in expense) {
				loadedExpense.push({
					id:key,
					title:expense[key].title,
					amount:expense[key].amount,
					date:new Date(expense[key].date)
				})
				
			}
			setData(loadedExpense)
			console.log(loadedExpense);
		} catch(error)	{
			console.log(error.message);
		}

	}

	const addExpenseItemList = async(data) => {
		const response = await fetch (
			"https://expense-tracker-8435e-default-rtdb.firebaseio.com/data.json",
			{
				method:"POST",
				body:JSON.stringify(data),
				headers:{
					"Content-type":"application/json"
				}
			}
		)
	}

	return (
		<div className="App">
			<AddExpense onSaveToArray={addExpenseItemList} />
			<button onClick={fetchDataHandler} >Загрузить все Расходы</button>
			<Expenses data = {data}/>
		</div>
	);
}

export default App;
