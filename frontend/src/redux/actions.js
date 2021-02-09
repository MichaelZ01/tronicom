import Axios from 'axios';
import { 
  PRODUCT_REQUEST, 
  SUCCESS_PRODUCT_REQUEST, 
  FAIL_PRODUCT_REQUEST 
} from './actionTypes'

// Redux action: Event that describes something happening in the application
export const listProduct = () => async (dispatch) =>{
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