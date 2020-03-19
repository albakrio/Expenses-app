import expensesTotal from '../../selectors/expensesTotal';
import expenses from '../fixtures/expenses';

test('should return 0 when there is no expenses', () => {
	const response = expensesTotal([]);
	expect(response).toBe(0);
});

test('should add a single expense', () => {
	const res = expensesTotal([expenses[0]]);
	expect(res).toBe(10095);
});

test('should return the sum of all expenses', () => {
	const res = expensesTotal(expenses);
	expect(res).toBe(10395);
});
