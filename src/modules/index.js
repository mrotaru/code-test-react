import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import beersReducer from './beers'
import shoppingBasketReducer from './shoppingBasket'

export default combineReducers({
  router: routerReducer,
  beers: beersReducer,
  basket: shoppingBasketReducer,
});
