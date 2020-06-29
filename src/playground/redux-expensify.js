import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
//ADD_EXPENSE
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
    
    ) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }

})
//Remove expense
const removeExpense = (id) => {
    const expenses = store.getState();
    return  {
        type: 'REMOVE_EXPENSE',
        id
    };
}

//Edit expense 
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//Set Text filter
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//Set amount filter
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
})

//Set date filter
const sortByDate = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'date'
})

//Set start date 
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    startDate: date
})

//set end date 
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    endDate: date
})
//Expense reducer.
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id != action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            });
        default:
            return state;
    }
}

//Filters reducers 
const filtersReducerDefaultState = {
    text : '', 
    sortBy : 'date', 
    startDate: undefined, 
    endDate: undefined};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_TEXT_FILTER': 
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses. filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    });
};

//Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }),
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 22200, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'salt', amount: 300, createdAt: -1000}));

// store.dispatch(removeExpense(expenseOne.expense.id));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// console.log(store.getState());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// store.dispatch(setTextFilter('s'))

const demoState = {
    expenses: [{
        id: 'puss3',
        description: 'January rent',
        note: 'Last payment',
        amount: 54500,
        CreatedAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};


