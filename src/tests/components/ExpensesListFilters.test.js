import React from 'react';
import  {shallow} from 'enzyme';
import moment from 'moment';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, onFocusChange, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    onFocusChange = jest.fn();

    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter = {setTextFilter}
            sortByAmount = {sortByAmount}
            sortByDate = {sortByDate}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
            onFocusChange = {onFocusChange}
        />
    );   
}); 
   

test('should render with default filters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render with altFilters', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle sort by text', () => {
    const value = 'text';
    wrapper.find('input').simulate('change', {
        target: {value}
    });
    expect(setTextFilter).toHaveBeenCalledWith('text');
});

test('should handle sortByAmount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: {value}   
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle sortByAmount', () => {
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: {value}   
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should handle onDatesChange', () => {
    const startDate = moment(0);
    const endDate = moment(0);
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenCalledWith(startDate);
    expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should handle on focus change', () => {
    const calendarFocused = null;
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});