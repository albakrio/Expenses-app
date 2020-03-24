import { removeExpense, editExpense, addExpense,startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase'

const createMockStore = configMockStore([thunk]);

test('should return the remove action', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('should return the edit action', () => {
	const action = editExpense('123', { note: 'new note' });
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123',
		updates: {
			note: 'new note'
		}
	});
});

test('should return the addExpense action', () => {
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2]
	});
});

test('should add expense to database and store ', (done) => {
	const store = createMockStore({});
	const expenseData = {
		description: 'mouse',
		amount: 35,
		note: '',
		createdAt: 100000
	};
	store.dispatch(startAddExpense(expenseData)).then(()=>{
		const actions = store.getActions()
		// console.log(actions)
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense:{
				id: expect.any(String),
				...expenseData
			}
		})

		return database.ref(`expenses/${actions[0].expense.id}`).once('value')
	}).then((snapshot)=>{
		expect(snapshot.val()).toEqual(expenseData)
		done()
	})
});

// test('should return the addExpense action with default values', () => {
// 	const action = addExpense();
// 	expect(action).toEqual({
// 		type: 'ADD_EXPENSE',
// 		expense: {
// 			description: '',
// 			note: '',
// 			amount: 0,
// 			createdAt: 0,
// 			id: expect.any(String)
// 		}
// 	});
// });
