import { 
  PRODUCT_DETAIL,
  SUCCESS_PRODUCT_DETAIL,
  FAIL_PRODUCT_DETAIL,
} from '../actionTypes';

const initialState = {
  loading: true,
  product: {},
}

// Product Detail Reducer
export default function(state = initialState, action) {
  switch(action.type) {
    case PRODUCT_DETAIL:
      return {
        loading: true
      };
    case SUCCESS_PRODUCT_DETAIL:
      return {
        loading: false,
        product: action.payload
      };
    case FAIL_PRODUCT_DETAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
};