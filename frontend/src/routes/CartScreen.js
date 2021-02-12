import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageBox from '../components/MessageBox';
import { addToCart } from '../redux/actions';

export default function CartScreen(props) {

  const productId = props.match.params.id;
  const dispatch = useDispatch();

  // Location is the current address of the app
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

  const cart = useSelector(state => state.cartAdd);
  const { cartItems } = cart;

  useEffect(() => {
    if(productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
    
  // Remove item from cart
  const removeFromCartHandler = (id) => {

  }

  return (
    <div className='row top'>
      <div className='col-2'>
        <h1>Cart</h1>
        
        {cartItems.length === 0 ? ( 
          <MessageBox>
            Cart is empty.
            <Link to='/'> Go back </Link>
          </MessageBox>
        ): (
          <ul>
            {cartItems.map((item) => (
              
              <li key={item.product}>
                <div className='row cart'>
                  <img 
                    src={item.image}
                    alt={item.name}
                    className='small'
                  />
                  <div className='min-30'>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.stock).keys()].map(
                        (x) => (
                          <option key={x+1} value={x+1} > {x+1}</option>
                        )
                      )}
                    </select>
                  </div>
                  <div>${item.price}</div>
                  <div>
                    <button
                      type='button'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}

          </ul>
        )}
      </div>
    </div>
  );
}