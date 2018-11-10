import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import Top from './Top.component';
import { mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

// https://github.com/express-labs/react-router-enzyme-context
it('renders login button if user is not authenticated', () => {
    const options = new ReactRouterEnzymeContext();
    const wrapper = mount(<Top/>, options.get());
    const link = wrapper.find('Link');
    expect(link.text()).toEqual('Login');
});