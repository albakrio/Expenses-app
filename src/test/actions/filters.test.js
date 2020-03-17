import moment from 'moment';

import {
	setTextFilter,
	setEndDate,
	setStartDate,
	sortByAmount,
	sortByDate
} from '../../actions/filters';

test('should return setTextFilter action', () => {
	const text = 'bill';
	const action = setTextFilter(text);

	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text
	});
});

test('should generate setTextFilter with default', () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	});
});

test('should generate setStartDate action object', () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
});

test('should generate setEndDate action object', () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	});
});

test('should return sortByAmount action ', () => {
	expect(sortByAmount()).toEqual({
		type: 'SORT_BY_AMOUNT'
	});
});

test('should return sortByDate action', () => {
	expect(sortByDate()).toEqual({
		type: 'SORT_BY_DATE'
	});
});
