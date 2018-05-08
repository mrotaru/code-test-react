import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from './modules';
import fetch from 'unfetch'

import Api from './api'
const initialState = {};
const enhancers = [];

const api = new Api({
  baseUrl: 'https://api.punkapi.com/v2',
  fetchFunction: fetch,
})

export const history = createBrowserHistory();

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const middleware = [
  thunk.withExtraArgument({ api }),
  routerMiddleware(history)
];
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(rootReducer, initialState, composedEnhancers);
