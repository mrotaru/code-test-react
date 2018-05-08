import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import beersReducer from './beers'

export default combineReducers({
  router: routerReducer,
  beers: beersReducer,
});
