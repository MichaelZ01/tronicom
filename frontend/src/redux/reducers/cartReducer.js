import { 
  CART_ADD, 
  CART_EMPTY, 
  CART_REMOVE, 
  CART_SAVE_PAYMENT_METHOD, 
  CART_SAVE_SHPIPING_ADDRESS 
} from "../actionTypes";

const initialState = {
  cartItems: [],
}

// Cart reducer
export function cartReducer (state = initialState, action) {
  switch(action.type) {
    case CART_ADD:
      const item = action.payload;
      const hasItem = state.cartItems.find(x => x.product === item.product);
      if(hasItem) {
        return {
          ...state,
          cartItems: state.cartItems.map( (x) => 
            x.product === hasItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    
    case CART_SAVE_SHPIPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload
      };
    case CART_EMPTY:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};