//Test filters reducer

import moment from 'moment';
import filtersReducer from '../../reducers/filters';

const currentState = {
	text: '',
	sortBy: 'date',
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month')
};

test('should return default state', () => {
	const action = filtersReducer(undefined, { type: '@@INIT' });
	expect(action).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('should return the text filter', () => {
	const text = 'Omar';
	const action = { type: 'SET_TEXT_FILTER', text };
	const state = filtersReducer(undefined, action);
	expect(state.text).toBe(text);
});

test('should sort by amount', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
	expect(state.sortBy).toBe('amount');
});

test('should sort by date ', () => {
	const currentState = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	};
	const action = { type: 'SORT_BY_DATE' };
	const state = filtersReducer(currentState, action);
	expect(state.sortBy).toBe('date');
});

test('should return set start date', () => {
	const startDate = moment();
	const action = { type: 'SET_START_DATE', startDate };
	const state = filtersReducer(undefined, action);
	expect(state.startDate).toEqual(startDate);
});

test('should return set end date', () => {
	const endDate = moment();
	const action = { type: 'SET_END_DATE', endDate };
	const state = filtersReducer(undefined, action);
	expect(state.endDate).toEqual(endDate);
});
