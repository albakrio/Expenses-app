import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render ExpenseListItem component', () => {
	// const mock = {
	// 	id: 1,
	// 	description: 'rent',
	// 	amount: 10095,
	// 	createdAt: 0,
	// 	note: ''
	// };

	const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
	expect(wrapper).toMatchSnapshot();
});
