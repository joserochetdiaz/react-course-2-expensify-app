import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
let wrapper;

beforeEach(() => {
    wrapper = shallow(<ExpensesSummary expenses={[expenses[0], expenses[1]]}/>);
});

test('Should render ExpensesSummary', () => {
    expect(wrapper).toMatchSnapshot();
});