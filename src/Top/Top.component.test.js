import ConnectedRouter from 'connected-react-router/lib/ConnectedRouter';
import React from 'react';
import ReactDOM from 'react-dom';
import Top from './Top.component';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ConnectedRouter><Top/></ConnectedRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});

// https://jestjs.io/docs/en/tutorial-react
it('renders login button if user is not authenticated', () => {
    const context = { router: { isActive: (a, b) => true } };
    const wrapper = shallow(<Top/>, { context })
    expect(wrapper.text()).toContain('A frontend of simple todo manager with React');
});