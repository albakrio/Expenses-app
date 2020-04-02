import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expensesTotal';
import { Link } from 'react-router-dom';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
	const formattedExpenseTotal = numeral(expensesTotal / 1000).format('$0,0.00');
	return (
		<div className='page-header'>
			<div className="content-container">
				<h1 className="page-header__title">
					Viewing <span>{expenseCount}</span> {expenseWord}. Totalling <span>{formattedExpenseTotal}</span>
				</h1>
				<div className="page-header__actions">
				  <Link className="button" to="/create">New Expense</Link>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	const visibleExpenses = selectExpenses(state.expenses, state.filters);

	return {
		expenseCount: visibleExpenses.length,
		expensesTotal: selectExpensesTotal(visibleExpenses)
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
