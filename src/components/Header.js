import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<header>
		<h1>Expensify</h1>
		<Link to='/' exact className='is-active'>
			Dashboard
		</Link>
		<Link to='/create' className='is-active'>
			Create Expense
		</Link>
		<Link to='/help' className='is-active'>
			Help
		</Link>
	</header>
);

export default Header;
