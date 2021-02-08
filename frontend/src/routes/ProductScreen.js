import React from 'react';
import Rating from '../components/Rating';
import data from '../data';

export default function ProductScreen(props) {
  const product = data.products.find(x => x._id === props.match.params.id)
  if(!product) {
    return <div>Product not found</div>
  }

  return(
    <div className='row'>
      <div className='col-2'>
        <img className='large' src={product.image} alt = {product.name}></img>
      </div>
      <div className='col-1'>
        <ul>
          <li>
            <h1>{product.name}</h1>
          </li>
          <li>
            <Rating>
              rating = {product.rating}
              numReviews = {product.numReviews}
            </Rating>
          </li>
          <li>
            Price : ${product.price}
          </li>
        </ul>
      </div>
      <div className='col-1'>

      </div>

    </div>
  );
}