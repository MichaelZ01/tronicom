import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageBox from '../components/MessageBox';
import { addToCart, removeFromCart } from '../redux/actions';

// Current cart screen
export default function CartScreen(props) {

  // Get state variables
  const productId = props.match.params.id;
  const cart = useSelector(state => state.cartAdd);
  const { cartItems } = cart;

  // Get quantity
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

  const dispatch = useDispatch();
  useEffect(() => {
    if(productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
    
  // Remove item from cart
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  }

  // Redirects the to shipping screen
  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  };

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
      <div className='col-1'>
        <div className='card card-body'>
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button 
                type='button' 
                className='checkout'
                onClick={checkoutHandler}
                disabled={cartItems.length === 0
              }>
                Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}