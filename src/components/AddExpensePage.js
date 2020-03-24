import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux'
import {startAddExpense} from '../actions/expenses'

const AddExpensePage = (props) => (
	<div>
		<h1>Create an Expense !</h1>
		<ExpenseForm
			onSubmitResult={(expense) => {
        props.dispatch(startAddExpense(expense))
        props.history.push('/')
      }}
      
		/>
	</div>
);

// const mapDispatchToProps = (dispatch)=>{
// 	startAddExpense: (expense) => dispatch(startAddExpense(expense))

// }

export default connect()(AddExpensePage);
