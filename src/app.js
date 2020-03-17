import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import ExpenseList from './components/ExpenseList';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 44 }));
store.dispatch(addExpense({ description: 'Rent', amount: 0, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 100 }));
//store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
	<div>
		<Provider store={store}>
			<AppRouter />
		</Provider>
	</div>
);

ReactDOM.render(jsx, document.getElementById('app'));
