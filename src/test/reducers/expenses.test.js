import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should return default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove an expense', () => {
	const state = expensesReducer(expenses, {
		type: 'REMOVE_EXPENSE',
		id: expenses[0].id
	});
	expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove an expense', () => {
	const state = expensesReducer(expenses, {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	});
	expect(state).toEqual(expenses);
});

test('should add an expense', () => {
	const expense = {
		id: 4,
		description: 'new',
		amount: 10000000,
		createdAt: 1500,
		note: ''
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense ', () => {
	const text = 'phone bill';
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[0].id,
		updates: {
			text
		}
	};

	const state = expensesReducer(expenses, action);
	expect(state[0].text).toBe(text);
});

test('should not edit an expense if id not found', () => {
	const text = 'phone bill';
	const action = {
		type: 'EDIT_EXPENSE',
		id: '-1',
		updates: {
			text
		}
	};

	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should set expenses',()=>{
	const action ={
		type: 'SET_EXPENSES',
		expenses: [expenses[1]]
	}

	const state = expensesReducer(expenses,action)
	expect(state).toEqual([expenses[1]])
})

