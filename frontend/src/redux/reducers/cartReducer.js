import { CART_ADD } from "../actionTypes";

const initialState = {
  cartItems: [],
}

export default function(state = initialState, action) {
  switch(action.type) {
    case CART_ADD:
      const item = action.payload;
      const hasItem = state.cartItems.find(x => x.product === item.product);
      if(hasItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => 
            x.product === hasItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }

    default:
      return state;
  }
};