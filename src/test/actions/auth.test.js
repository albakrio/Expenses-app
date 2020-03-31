import { login, startLogin, logout, startLogout } from '../../actions/auth';

test('should dispatch the login and return uid', () => {
	const uid = 'abc123';
	const action = login(uid);
	expect(action).toEqual({
		type: 'LOGIN',
		uid
	});
});

test('should dispatch the logout action', () => {
	expect(logout()).toEqual({
		type: 'LOGOUT'
	});
});
