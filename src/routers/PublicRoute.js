import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => (
	<Route
		{...rest}
		component={(props)=>(
			isAuthenticated? (
				<Redirect to='/dashboard' />
			) : 
			(
				<Component {...props} />
			)
		)}
			
		
	/>
);

const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
