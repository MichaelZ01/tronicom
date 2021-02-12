
// WOP





import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/actions';

// Display an item in the cart

export default function CartItem(props) {

  const dispatch = useDispatch();
  const { item } = props;

  return (
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
            onChange={props.changeQty()}
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
            onClick={() => props.removeFromCartHandler(item.product)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}