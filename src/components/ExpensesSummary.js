import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
    const summary = selectExpensesTotal(props.expenses);
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
    return (
        <div className="page-header">
            <div className="content-container">
                {props.expenses.length > 0 && <h1 className="page-header__title">You are now viewing <span>{props.expenses.length}</span> {expenseWord} totalling <span>{numeral(summary).format('$0,0.00')}</span></h1>}
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
      
    );
};
const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});
export default connect(mapStateToProps)(ExpensesSummary);