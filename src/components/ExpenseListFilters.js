import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';
//import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    onSortChange = (e) => {
        e.target.value === 'amount' ? this.props.sortByAmount() : this.props.sortByDate()
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate); 
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    render () {
        return (
            <div>
                <input 
                    type = "text" 
                    value ={this.props.filters.text} 
                    onChange={this.onTextChange}
                />
                <select 
                    value={this.props.filters.sortBy} 
                    onChange= {this.onSortChange}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker 
                    startDateId = {'stardateid'}
                    startDate={this.props.filters.startDate}
                    endDateId={'enddateid'}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter : (text) => dispatch(setTextFilter(text)),
    sortByAmount : () => dispatch(sortByAmount()),
    sortByDate : () => dispatch(sortByDate),
    setStartDate :  (startDate) => dispatch(setStartDate(startDate)),
    setEndDate : (endDate) => dispatch(setEndDate(endDate))

});


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters); 