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
  CART_SAVE_SHPIPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_SUCCESS,
  CART_EMPTY,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_REQUEST
} from './actionTypes'

// Redux action: Event that describes something happening in the application

// Lists products
export const listProduct = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/products');
    dispatch({
      type: SUCCESS_PRODUCT_REQUEST,
      payload: data
    })
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

// Signs out a user
export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('shippingAddress')
  dispatch({
    type: USER_SIGNOUT,
  });
}

// Adds shipping address
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHPIPING_ADDRESS,
    payload: data
  });
  localStorage.setItem('shippingAddress', JSON.stringify(data));
}

// Adds payment method
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data
  });
}

// Creates an order
export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({
    type: ORDER_CREATE_REQUEST,
    payload: order
  });
  try {
    const {
      userSignin: { userInfo }
    } = getState();
    const {data} = await Axios.post('/api/orders', order, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    })
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
    dispatch({ type: CART_EMPTY});
    localStorage.removeItem('cartItems');
  } catch(error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message 
          ? error.response.data.message
          : error.message,
    })
  }
}

// Returns the details of an order
export const detailsOrder = (orderId) => async (dispatch, getState) => {
  dispatch({
    type: ORDER_DETAILS_REQUEST,
    payload: orderId
  });
  const { 
    userSignin: {userInfo} 
  } = getState();
  try {
    const { data } = await Axios.get(`/api/orders/${orderId}`, {
      headers: {Authorization: `Bearer ${userInfo.token}`},
    });
    dispatch({type: ORDER_DETAILS_SUCCESS, payload: data});
  } catch(error) {
    const message = 
      error.response && error.response.data.message 
      ? error.response.data.message
      : error.message;
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: message,
    })
  }
}