import { 
  FAIL_PRODUCT_REQUEST, 
  PRODUCT_REQUEST, 
  SUCCESS_PRODUCT_REQUEST 
} from '../actionTypes';

const initialState = {
  loading: true,
  products: [],
}

// Get Product Reducer
export function productsReducer (state = initialState, action) {
  switch(action.type) {
    case PRODUCT_REQUEST:
      return {
        loading: true
      };
    case SUCCESS_PRODUCT_REQUEST:
      return {
        loading: false,
        products: action.payload
      };
    case FAIL_PRODUCT_REQUEST:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
};