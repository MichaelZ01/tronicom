import Axios from 'axios';
import { 
  PRODUCT_REQUEST, 
  SUCCESS_PRODUCT_REQUEST, 
  FAIL_PRODUCT_REQUEST, 
  PRODUCT_DETAIL,
  SUCCESS_PRODUCT_DETAIL,
  FAIL_PRODUCT_DETAIL,
  CART_ADD
} from './actionTypes'

// Redux action: Event that describes something happening in the application

// Lists products
export const listProduct = () => async (dispatch) => {
  // Request for product data
  dispatch({
    type: PRODUCT_REQUEST,
  });
  // Return data if successful
  try {
    const { data } = await Axios.get('/api/products');
    dispatch({
      type: SUCCESS_PRODUCT_REQUEST,
      payload: data
    })
    // Return error message if not
  } catch (error) {
    dispatch({
      type: FAIL_PRODUCT_REQUEST,
      payload: error.message
    })
  }
};

// Gets product details
export const detailProducts = (productId) => async (dispatch) => {

  dispatch({
    type: PRODUCT_DETAIL,
    payload: productId,
  });
  try {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({
      type: SUCCESS_PRODUCT_DETAIL,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FAIL_PRODUCT_DETAIL,
      payload: 
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

// Adds an item to the cart
export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      stock: data.stock,
      product: data._id,
      qty,
    }
  })

  // Refreshing page does not lose current cart items
  localStorage.setItem('cartItems', JSON.stringify(getState().cartAdd.cartItems));
}