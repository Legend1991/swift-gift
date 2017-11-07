import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';

import categories from './categories';

export default combineReducers({
  routing,
  categories
});