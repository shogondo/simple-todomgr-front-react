import App from './App';
import ConnectedRouter from 'connected-react-router/lib/ConnectedRouter';
import React from 'react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ConnectedRouter><App/></ConnectedRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});
