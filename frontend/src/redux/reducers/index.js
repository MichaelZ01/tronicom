import { combineReducers } from 'redux';
import productReducer from './productsReducer';

// Root reducer
export default combineReducers({
  productList: productReducer,
});