import getTotalExpenses from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test('Should test the select expenses total function', () => {
    const res = getTotalExpenses(expenses);
    expect(res).toBe(154695);
});

test('Should test the select expenses total function', () => {
    const res = getTotalExpenses([expenses[0]]);
    expect(res).toBe(195);
});

test('Should test the select expenses total function', () => {
    const res = getTotalExpenses([]);
    expect(res).toBe(0);
});