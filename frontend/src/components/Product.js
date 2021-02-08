import React from 'react';
import Rating from './Rating';

// Display a card of a product
export default function Product(props) {

  const { product } = props;

  return(
    <div key={product._id} className='card'>
      <a href={`../product/${product._id}`}>
        <img className='medium' 
          src={product.image} 
          alt={product.name}>
        </img>
      </a>
      <div className='card-body'>
        <div className='card-name'>
          <a href={`../product/${product._id}`} >
            <span>{product.name}</span>
          </a>
        </div>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className='price'>
          ${product.price}
        </div>
      </div>
    </div>
  );



}