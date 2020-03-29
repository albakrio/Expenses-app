import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login,logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import ExpenseList from './components/ExpenseList';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import './firebase/playground/promises';

const store = configureStore();

const jsx = (
	<div>
		<Provider store={store}>
			<AppRouter />
		</Provider>
	</div>
);

let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(jsx, document.getElementById('app'));
		hasRendered = true;
	}
};

ReactDOM.render(<p>Loading ....</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(login(user.uid))
		store.dispatch(startSetExpenses()).then(() => {
			renderApp()
			if(history.location.pathname === '/'){
				history.push('/dashboard')
			}
			console.log('logged in')
		});
	} else {
		store.dispatch(logout())
		renderApp()
		history.push('/');
		console.log('logged out')
	}

});
