import React, { useState } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const ExpenseForm = (props) => {
	const [description, setDescription] = useState(
		props.expense ? props.expense.description : ''
	);
	const [note, setNote] = useState(props.expense ? props.expense.note : '');
	const [amount, setAmount] = useState(
		props.expense ? (props.expense.amount / 100).toString() : ''
	);
	const [createdAt, setCreatedAt] = useState(
		props.expense ? moment(props.expense.createdAt) : moment()
	);
	const [focusedCalendar, setFocusedCalendar] = useState(false);
	const [error, setError] = useState('');

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

	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (!description || !amount) {
			setError('Please provide description and amount!');
		} else {
			setError('');
			props.onSubmitResult({
				description,
				amount: parseFloat(amount * 10) * 100,
				note,
				createdAt: createdAt.valueOf()
			});
		}
	};

	return (
		<form className='form' onSubmit={onSubmitHandler}>
			{error && <p className='form__error'>{error}</p>}
			<input
				type='text'
				className='text-input'
				placeholder='Description'
				autoFocus
				value={description}
				onChange={onDescriptionChange}
			/>
			<input
				type='text'
				className='text-input'
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
				className='text-area'
				placeholder='write a note (optional)'
				value={note}
				onChange={onNoteChange}
			></textarea>
			<div>
				<button className='button'> Save expense </button>
			</div>
		</form>
	);
};

export default ExpenseForm;
