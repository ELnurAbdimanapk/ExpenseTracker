 import './AddExpense.css'
import ExpenseForm from './ExpenseForm'

 const AddExpense = (props) => {
    const savaDataFormHandler=(formData) => {
        const insertKeyToFormData ={
            ...formData,
            id:Math.random().toString()
        }
        props.onSaveToArray(insertKeyToFormData)
        
    }
    return(
        <div className='new-expense'>
            <ExpenseForm onSave={savaDataFormHandler}/>
        </div>
    )
 }

 export default AddExpense