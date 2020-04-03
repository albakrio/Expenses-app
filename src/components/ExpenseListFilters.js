import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate
} from '../actions/filters';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const ExpenseListFilters = (props) => {
	//console.log(props);
	const [calendarFocused, setCalendarFocused] = useState(null);
	//console.log(calendarFocused);

	const onDatesChange = ({ startDate, endDate }) => {
		props.dispatch(setStartDate(startDate));

		props.dispatch(setEndDate(endDate));
	};

	const onFocusChange = (focusedInput) => {
		setCalendarFocused(focusedInput);
	};

	return (
		<div className='content-container'>
			<div className='input-group'>
				<div className='input-group__item'>
					<input
						type='text'
						className='text-input'
						placeholder='Search expenses'
						value={props.filters.text}
						onChange={(e) => {
							props.dispatch(setTextFilter(e.target.value));
						}}
					/>
				</div>
				<div className='input-group__item'>
					<select
						className='select'
						value={props.filters.sortBy}
						onChange={(e) => {
							if (e.target.value === 'date') {
								props.dispatch(sortByDate());
							} else if (e.target.value === 'amount') {
								props.dispatch(sortByAmount());
							}
						}}
					>
						<option value='date'>Date</option>
						<option value='amount'>Amount</option>
					</select>
				</div>
				<div className='input-group__item'>
					<DateRangePicker
						startDate={props.filters.startDate} // momentPropTypes.momentObj or null,
						startDateId='start' // PropTypes.string.isRequired,
						endDate={props.filters.endDate} // momentPropTypes.momentObj or null,
						endDateId='end'
						onDatesChange={onDatesChange}
						focusedInput={calendarFocused}
						onFocusChange={onFocusChange}
						showClearDates={true}
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		filters: state.filters,
		expenses: state.expenses
	};
};

export default connect(mapStateToProps)(ExpenseListFilters);
