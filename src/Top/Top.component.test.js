import ConnectedRouter from 'connected-react-router/lib/ConnectedRouter';
import React from 'react';
import ReactDOM from 'react-dom';
import Top from './Top.component';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ConnectedRouter><Top/></ConnectedRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});
