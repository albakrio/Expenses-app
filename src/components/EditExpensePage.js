import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense } from '../actions/expenses';
import { startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
	console.log(props);
	return (
		<div>
			<div className='page-header'>
				<div className='content-container'>
					<h1 className='page-header__title'>Edit expense</h1>
				</div>
			</div>
			<div className='content-container'>
				<ExpenseForm
					expense={props.expense}
					onSubmitResult={(expense) => {
						props.dispatch(startEditExpense(props.match.params.id, expense));
						props.history.push('/');
					}}
				/>

				<button
				  className="button button--secondary"
					onClick={() => {
						props.dispatch(startRemoveExpense({ id: props.expense.id }));
						props.history.push('/');
					}}
				>
					Delete expense
				</button>
			</div>
		</div>
	);
};

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find(
			(expense) => expense.id === props.match.params.id
		)
	};
};

// const mapDispatchToProps = (dispatch,props)=>({
// 	editExpense: (id,expense)=> dispatch(editExpense(id,expense)),
//   startRemoveExpense: (data) => dispatch(startRemoveExpense(data))

// })

export default connect(mapStateToProps)(EditExpensePage);
