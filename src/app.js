import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getvisibleExppenses from './selectors/expenses'
import validator from 'validator';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

const store = configureStore();
store.dispatch(addExpense({description:'Water bill', amount:400}));
store.dispatch(addExpense({description:'Gas bill', amount:400, createdAt: 1000}));
store.dispatch(addExpense({description:'rent', amount:10900}));
store.dispatch(setTextFilter('w'));

const state = store.getState();
const visibleExpenses = getvisibleExppenses(state.expenses, state.filters)
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))
 