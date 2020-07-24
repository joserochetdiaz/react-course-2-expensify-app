import {
    startAddExpense, 
    addExpense, 
    editExpense, 
    removeExpense, 
    setExpenses, 
    startSetExpenses, 
    startRemoveExpense, 
    startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import { set } from 'numeral';


const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id]={ description, note, amount, createdAt };
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

test('Should remove expense from the datbase and store', (done) => {
    const store = createMockStore();
    store.dispatch(startRemoveExpense(expenses[1].id)).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: expenses[1].id
        });    
        done();
    });
})

test('should setup edit expense action object', () => {
    const action = editExpense('abc123', {note: 'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            note: 'New note value'
        }
    });
});

test('Shuold update expense on the data base and store', (done) => {
    const store = createMockStore({});
    const id = expenses[1].id;
    const updates = {
        description: 'updating',
        createdAt: 1
    };

    store.dispatch(startEditExpense(id, updates))
    .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            id,
            type: 'EDIT_EXPENSE',
            updates
        });
        done();
    });
});

test('should setup expense add action object', () => {
    const action = addExpense(expenses[1]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[1]  
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };

     store.dispatch(startAddExpense(expenseData)).then(() => { 
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
     }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    }); 
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

     store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
     }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    }); 
});

test('should setup set expense action object with data',() => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch expenses from firebase', (done) => {
    const store = createMockStore({});
    
    store.dispatch(startSetExpenses()).then(() => {
        const actions =  store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});