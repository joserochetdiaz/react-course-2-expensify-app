import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should test default state', () => {
    const state = expensesReducers(undefined, '@@INIT');
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
    const expense =  {
        id: 4,
        description: 'water', 
        note: '',
        amount: 3000,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit the expense', () => {
    const description = 'netflix';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state[1].description).toBe(description);
        
});

test('should edit the expense', () => {
    const description = 'netflix';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
        
});
