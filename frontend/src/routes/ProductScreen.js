import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data';

// Renders the page for a specific product
export default function ProductScreen(props) {

  // Gets the product from the database
  const product = data.products.find(x => x._id === props.match.params.id)
  if(!product) {
    return <div>Product not found</div>
  }

  return(
    <div>
      <Link to='/' className='back'><i className='fa fa-arrow-left'></i>&nbsp;Back to results</Link>
      <div className='row top'>
        <div className='col-2'>
          <img className='large' src={product.image} alt = {product.name}></img>
        </div>
        <div className='col-1'>
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              Artist: {product.artist}
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li>
              Price : ${product.price}
            </li>
          </ul>
        </div>
        <div className='col-1'>
          <div className='card card-body'>
            <ul>
              <li>
                <div className='row'>
                  <div>Price</div>
                  <div className='price'>${product.price}</div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div>Status</div>
                  <div>
                    {product.stock > 0 ? (
                      <span className='inStock'>In stock</span>    
                    ): (  
                      <span className='outStock'>Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className='add'>Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}