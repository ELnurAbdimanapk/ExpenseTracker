import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] =useState("")
    const [enteredAmount,setEnteredAmount] =useState("")
    const [enteredDate,setEnteredDate] =useState("")

    const changeTitle= (e) => {
        setEnteredTitle(e.target.value)
    }
    const changeAmount= (e) => {
        setEnteredAmount(e.target.value)
    }
    const changeDate= (e) => {
        setEnteredDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const formData = {
          title: enteredTitle,
           amount:enteredAmount,
            date:new Date(enteredDate),// string dateti obyektke saktap beret
        }
        // console.log(formData);
        props.onSave(formData)


        setEnteredAmount("")
        setEnteredDate("")
        setEnteredTitle("")


        
        
        
    }

    return (
        <form  onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={changeTitle} value ={enteredTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input onChange={changeAmount} value={enteredAmount} type="number"   min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input onChange={changeDate} value={enteredDate} type="date" min="2021-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )

}
export default ExpenseForm
