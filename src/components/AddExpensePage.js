import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux'
import {addExpense} from '../actions/expenses'

const AddExpensePage = (props) => (
	<div>
		<h1>Create an Expense !</h1>
		<ExpenseForm
			onSubmitResult={(expense) => {
        props.dispatch(addExpense(expense))
        props.history.push('/')
      }}
      
		/>
	</div>
);

export default connect()(AddExpensePage);
