import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router'
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const store = createStore(
    connectRouter(history)(
        combineReducers({
        })
    ),
    applyMiddleware(
        logger,
        thunk,
        routerMiddleware(history)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
