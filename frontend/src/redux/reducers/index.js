import { combineReducers } from 'redux';
import productReducer from './productsReducer';
import productDetailReducer from './productDetailReducer'

// Root reducer
export default combineReducers({
  productList: productReducer,
  productDetail: productDetailReducer,
});