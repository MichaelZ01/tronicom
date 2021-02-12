import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

// Display a card of a product

// Note: anchor vs Link
// React is typically use to create single page applications, the href attribute
// of the anchor tags triggers a page refresh that would reset the application
// state. Thus, typically Link is used instead.
export default function Product(props) {

  const { product } = props;

  return(
    <div key={product._id} className='card'>
      <Link to={`../product/${product._id}`}>
        <img className='medium' 
          src={product.image} 
          alt={product.name}>
        </img>
      </Link>
      <div className='card-body'>
        <div className='card-name'>
          <Link to={`../product/${product._id}`} >
            <span>{product.name}</span>
          </Link>
        </div>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className='price'>
          ${product.price}
        </div>
      </div>
    </div>
  );



}