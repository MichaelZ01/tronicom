import { CART_ADD, CART_REMOVE } from "../actionTypes";

const initialState = {
  cartItems: [],
}

// Card reducer
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
    
    default:
      return state;
  }
};