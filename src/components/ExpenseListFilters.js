import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate
} from '../actions/filters';
import moment from 'moment';
import 'react-dates/initialize';

import { DateRangePicker } from 'react-dates';


const ExpenseListFilters = (props) => {
	//console.log(props);
	const [calendarFocused, setCalendarFocused] = useState(null);
	//console.log(calendarFocused);

	const onDatesChange = ({ startDate, endDate }) => {
		props.dispatch(setStartDate(startDate));

		props.dispatch(setEndDate(endDate));
	};

	const onFocusChange = ({ focusedInput }) => {
		setCalendarFocused(focusedInput);
	};
	return (
		<div>
			<input
				type='text'
				value={props.filters.text}
				onChange={(e) => {
					props.dispatch(setTextFilter(e.target.value));
				}}
			/>
			<select
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

			<DateRangePicker
				startDate={props.filters.startDate} // momentPropTypes.momentObj or null,
				startDateId='start' // PropTypes.string.isRequired,
				endDate={props.filters.endDate} // momentPropTypes.momentObj or null,
				endDateId='end' // PropTypes.string.isRequired,
				onDatesChange={onDatesChange}
				focusedInput={calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
				onFocusChange={onFocusChange} // PropTypes.func.isRequired,
			/>
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
