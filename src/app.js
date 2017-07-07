import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import Root from './containers/root';
import rootReducer from './reducers';

const history = createHistory();

const middleware = applyMiddleware(routerMiddleware(history));

/* eslint-disable no-underscore-dangle */
const store = createStore(
    rootReducer,
    compose(middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f),
);
/* eslint-enable */

render(<Root store={store} history={history} />, document.getElementById('root'));
