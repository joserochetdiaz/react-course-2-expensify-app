import React from 'react';
import {shallow} from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

test('Should render the NotFoundComponent', () => {
    const wrapper = (<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});