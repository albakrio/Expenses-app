import React, { useState } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const ExpenseForm = () => {
	const [description, setDescription] = useState('');
	const [note, setNote] = useState('');
	const [amount, setAmount] = useState('');
	const [createdAt, setCreatedAt] = useState(moment());
	const [focusedCalendar, setFocusedCalendar] = useState(false);
	const [error, setError] = useState('')

	const onDescriptionChange = (e) => {
		const newDescription = e.target.value;

		setDescription(newDescription);
	};

	const onNoteChange = (e) => {
		const newNote = e.target.value;
		setNote(newNote);
	};

	const onAmountChange = (e) => {
		const newAmount = e.target.value;
		if (!newAmount || newAmount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			return setAmount(newAmount);
		}
	};

	const onDateChange = (createdAt) => {
		if (createdAt) {
			setCreatedAt(createdAt);
		}
	};
	const onFocusCalendar = ({ focused }) => {
		setFocusedCalendar(focused);
	};

	const onSubmitHandler = (e)=>{
		e.preventDefault()
		if(!description || !amount){
			setError('Please provide description and amount!')
		} else {
			setError('')
			console.log('submitted')

		}
	}

	return (
		<div>
		  {error && <p>{error}</p>}
			<form onSubmit={onSubmitHandler}>
				<input
					type='text'
					placeholder='Description'
					autoFocus
					value={description}
					onChange={onDescriptionChange}
				/>
				<input
					type='text'
					placeholder='Amount'
					value={amount}
					onChange={onAmountChange}
				/>
				<SingleDatePicker
					date={createdAt}
					onDateChange={onDateChange}
					focused={focusedCalendar}
					onFocusChange={onFocusCalendar}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
				<textarea
					placeholder='write a note (optional)'
					value={note}
					onChange={onNoteChange}
				></textarea>
				<button> Add Expense </button>
			</form>
		</div>
	);
};

export default ExpenseForm;
