import {
	removeExpense,
	editExpense,
	addExpense,
	startAddExpense,
	setExpense,
	startSetExpenses,
	startRemoveExpense,
	startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configMockStore([thunk]);
const uid = 'thisistestid'
const defaultAuthState = {auth: {uid}}

beforeEach((done) => {
	const expenseData = {};
	expenses.forEach(({ id, description, createdAt, amount, note }) => {
		expenseData[id] = { description, createdAt, amount, note };
	});
	database
		.ref(`users/${uid}/expenses`)
		.set(expenseData)
		.then(() => done());
});

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
	const store = createMockStore(defaultAuthState);
	const expenseData = {
		description: 'mouse',
		amount: 35,
		note: '',
		createdAt: 100000
	};
	store
		.dispatch(startAddExpense(expenseData))
		.then(() => {
			const actions = store.getActions();
			// console.log(actions)
			expect(actions[0]).toEqual({
				type: 'ADD_EXPENSE',
				expense: {
					id: expect.any(String),
					...expenseData
				}
			});

			return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
		})
		.then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseData);
			done();
		});
});

test('should return setExpense action', () => {
	const action = setExpense(expenses);
	expect(action).toEqual({
		type: 'SET_EXPENSES',
		expenses
	});
});

test('should fetch the data from firebase', (done) => {
	const store = createMockStore(defaultAuthState);
	store.dispatch(startSetExpenses()).then(() => {
		const actions = store.getActions();
		console.log(actions[0])
		expect(actions[0]).toEqual({
			type: 'SET_EXPENSES',
			expenses
		});
		done();
	});
});

test('should remove expenses from database', (done) => {
	const store = createMockStore(defaultAuthState);
	const id = expenses[0].id;
	store
		.dispatch(startRemoveExpense({ id }))
		.then(() => {
			const actions = store.getActions();

			expect(actions[0]).toEqual({
				type: 'REMOVE_EXPENSE',
				id
			});
			return database.ref(`users/${uid}/expenses/${id}`).once('value');
		})
		.then((snapshot) => {
			expect(snapshot.val()).toBeFalsy();
			done();
		});
});

test('should edit expenses from database', (done) => {
	const store = createMockStore(defaultAuthState);
	const id = expenses[0].id;
	const updates = { amount: 222222 };
	store.dispatch(startEditExpense(id, updates)).then(()=>{
		const actions = store.getActions()
		expect(actions[0]).toEqual({
			type: 'EDIT_EXPENSE',
			id,
			updates
		})
		return database.ref(`users/${uid}/expenses/${id}`).once('value').then((snapshot)=>{
			expect(snapshot.val().amount).toBe(updates.amount)
			done()
		})
		
	})

});
