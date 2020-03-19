import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';

test('should render ExpensesSummary with one expense', () => {
	const wrapper = shallow(
		<ExpensesSummary expenseCount={1} expensesTotal={235} />
	);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multi expenses', () => {
	const wrapper = shallow(
		<ExpensesSummary expenseCount={10} expensesTotal={100} />
	);
	expect(wrapper).toMatchSnapshot();
});

