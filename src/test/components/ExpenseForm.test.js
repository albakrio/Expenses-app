import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import { act, renderHook } from '@testing-library/react-hooks';
import { render } from 'node-sass';

test('should render expenseForm component', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm component with an expense', () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render for invalid form submission', () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
	});
	expect(wrapper.find('p').length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

// test('should set description on input change', () => {
// 	const value = 'new description';
// 	const wrapper = shallow(<ExpenseForm />);

// 	wrapper
// 		.find('input')
// 		.at(0)
// 		.simulate('change', {
// 			target: { value }
// 		});
// 	expect(
// 		wrapper
// 			.find('input[onChange="onDescriptionChange"]')
// 			.text()
// 			.toBe('new description')
// 	);
// });

// test('should render error hook value', () => {
// 	const hook = error;

// 	expect(hook).toBe('');
// });
