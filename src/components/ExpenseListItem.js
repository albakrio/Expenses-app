import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

const ExpenseListItem = ({ amount, createdAt, description, id }) => {
	return (
		<div>
			<Link to={`/edit/${id}`}>
				<h1>{description}</h1>
			</Link>

			<p>
				{amount} - {createdAt}
			</p>
		</div>
	);
};

export default ExpenseListItem

//export default connect()(ExpenseListItem);
