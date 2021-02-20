import Axios from 'axios';
import { 
  PRODUCT_REQUEST, 
  SUCCESS_PRODUCT_REQUEST, 
  FAIL_PRODUCT_REQUEST, 
  PRODUCT_DETAIL,
  SUCCESS_PRODUCT_DETAIL,
  FAIL_PRODUCT_DETAIL,
  CART_ADD,
  CART_REMOVE,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  CART_SAVE_SHPIPING_ADDRESS
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

// Removes an item from the card
export const removeFromCart = (productId) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE,
    payload: productId
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cartAdd.cartItems));
}

// User signin action
export const signin = (email, password) => async(dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: { email, password }
  });
  try {
    const { data } = await Axios.post('/api/users/signin', {email, password});
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: 
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

// User register action
export const register = (name, email, password) => async(dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
    payload: { email, password }
  });
  try {
    const { data } = await Axios.post('/api/users/register', {name, email, password});
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: 
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  dispatch({
    type: USER_SIGNOUT,
  });
}

export const saveShippingAddress= (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHPIPING_ADDRESS,
    payload: data
  });
  localStorage.setItem('shippingAddress', JSON.stringify(data));
}