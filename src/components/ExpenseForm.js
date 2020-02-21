import React, { useState } from 'react';
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize';

import 'react-dates/lib/css/_datepicker.css'

const ExpenseForm = (props) => {
	//const [description, setDescription] = useState({description: ''});
	const [form, setState] = useState({
		description: '',
		note: '',
		amount: '',
		createdAt: moment(),
		focusedCalendar: false
	})


	//console.log(moment().format("MMM Do, YYYY"))

	const onDescriptionChange = (e) => {
		const newDescription = e.target.value;


		setState({ ...form, description: newDescription });
	};

	const onNoteChange = (e) => {
		const newNote = e.target.value
		setState({ ...form, note: newNote })
	}

	const onNumChange = (e) => {
		const newAmount = e.target.value
		if (newAmount.match(/^\d*(\.\d{0,2})?$/)) {
			return setState({ ...form, amount: newAmount })
		}

	}

	const onDateChange = (createdAt) => {
		setState({ ...form, createdAt })

	}
	const onFocusCalendar = ({ focused }) => {
		setState({ ...form, focusedCalendar: focused })
	}

	return (
		<div>
			<form>
				<input
					type='text'
					placeholder='Description'
					autoFocus
					value={form.description}
					onChange={onDescriptionChange}
				/>

				<input type='text' placeholder='Amount' value={form.amount} onChange={onNumChange} />

				<SingleDatePicker
					date={form.createdAt}
					onDateChange={onDateChange}
					focused={form.focusedCalendar}
					onFocusChange={onFocusCalendar}
					numberOfMonths={1}
					isOutsideRange={()=>{false}}

				/>

				<textarea placeholder='write a note (optional)' value={form.note}
					onChange={onNoteChange}   ></textarea>
				<button>Submit</button>
			</form>
		</div>
	);
};



export default ExpenseForm;
