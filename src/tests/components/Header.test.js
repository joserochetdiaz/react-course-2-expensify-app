import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import {Header} from '../../components/Header';

test('Should render Header correctly', () => {
    const wrapper = shallow(<Header startLogOut={() => {}}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should call logout function on button click', () => {
    const startLogOut = jest.fn();
    const wrapper = shallow(<Header startLogOut = {startLogOut}/>);
    wrapper.find('button').simulate('click');
    expect(startLogOut).toHaveBeenCalled();
});