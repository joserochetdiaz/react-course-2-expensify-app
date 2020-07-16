import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
    const summary = selectExpensesTotal(props.expenses);
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
    return (
        <div>
            
            {props.expenses.length > 0 && <h3>You are now viewing {props.expenses.length} {expenseWord} totalling {numeral(summary).format('$0,0.00')}</h3>}
        </div>
      
    );
};
const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});
export default connect(mapStateToProps)(ExpensesSummary);