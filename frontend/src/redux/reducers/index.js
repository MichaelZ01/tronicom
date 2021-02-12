import { combineReducers } from 'redux';
import productReducer from './productsReducer';
import productDetailReducer from './productDetailReducer';
import cartReducer from './cartReducer';

// Root reducer
export default combineReducers({
  productList: productReducer,
  productDetail: productDetailReducer,
  cartAdd: cartReducer,
});