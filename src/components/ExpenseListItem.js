import React from 'react';
import {connect} from 'react-redux'
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({amount,createdAt, description, dispatch, id}) => {
	
	return (
		<div>
			<h1>{description}</h1>
			<p>
				{amount} - {createdAt}
			</p>
			<button onClick={()=>{dispatch(removeExpense({id}))}}>Delete</button>
		</div>
	);
};

export default connect()(ExpenseListItem);
