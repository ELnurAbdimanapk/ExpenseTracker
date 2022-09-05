import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
	const [text, setText] = useState(props.title);
	const handclick = (e) => {
		setText(222);
	};
	// console.log(text);

	return (
		<div className="expense-item">
			<ExpenseDate date={props.date}/>
			<h2 className="expense-item h2">{text}</h2>
			<div className="expense-item__price">{props.amount}</div>
			<button onClick={handclick}>Title Change</button>
		</div>
	);
};

export default ExpenseItem;
