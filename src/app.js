import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import ExpenseList from './components/ExpenseList';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import './firebase/playground/promises';

const store = configureStore();
console.log('TESTING!!!!');
const jsx = (
	<div>
		<Provider store={store}>
			<AppRouter />
		</Provider>
	</div>
);

ReactDOM.render(<p>Loading ....</p>, document.getElementById('app'));
store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(jsx, document.getElementById('app'));
});
