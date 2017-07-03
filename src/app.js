import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import Root from './containers/root';
import rootReducer from './reducers';

const history = createHistory();

const middleware = routerMiddleware(history);

/* eslint-disable no-underscore-dangle */
const store = createStore(
    rootReducer,
    applyMiddleware(middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

render(<Root store={store} history={history} />, document.getElementById('root'));
