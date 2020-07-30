import React from 'react';
import { shallow } from 'enzyme';
import {LoginPage} from '../../components/LoginPage';

test('should render the login page correctly', () => {
    const wrapper = shallow(<LoginPage startLogin = {() => {}}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should call log in function', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin = {startLogin}/>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});