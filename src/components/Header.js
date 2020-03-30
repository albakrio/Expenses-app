import React from 'react';
import { Link } from 'react-router-dom';
import {startLogout} from '../actions/auth'
import {connect} from 'react-redux'

export const Header = ({startLogout}) => (
	<header>
		<h1>Expensify</h1>
		<Link to='/dashboard'  className='is-active'>
			Dashboard
		</Link>
		<Link to='/create' className='is-active'>
			Create Expense
		</Link>
		<button onClick={startLogout}>Log out</button>
	</header>
);

const mapDispatchToProps = (dispatch) =>({
	startLogout: ()=> dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps) (Header);
