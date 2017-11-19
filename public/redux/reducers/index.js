import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';

import categories from './categories';
import products from './products';

export default combineReducers({
  routing,
  categories,
  products
});