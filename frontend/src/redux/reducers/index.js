import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { productDetailReducer } from './productDetailReducer';
import { cartReducer } from './cartReducer';

// Root reducer
export default combineReducers({
  productList: productsReducer,
  productDetail: productDetailReducer,
  cartAdd: cartReducer,
});