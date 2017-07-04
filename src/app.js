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

/*
import { applyMiddleware, createStore, compose } from 'redux';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import reducer from './reducer';

const middleware = applyMiddleware(promiseMiddleware, localStorageMiddleware);

const store = createStore(
  reducer,
  compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export default store;
*/
