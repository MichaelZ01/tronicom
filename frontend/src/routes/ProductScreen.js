import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailProducts } from '../redux/actions'  
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

// Renders the page for a specific product
export default function ProductScreen(props) {

  const dispatch = useDispatch();

  // Gets the product from the database
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetail);
  const { loading, error, product } = productDetails;


  useEffect(() => {
    dispatch(detailProducts(productId));
  }, [dispatch, productId]);

  return(
    <div>
      {loading ? ( <LoadingBox></LoadingBox>
      ) : error ? ( <MessageBox varient='error'>{error}</MessageBox>
      ) : (
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
                <li>
                  Description:
                  <p>{product.description}</p>
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
      )} 
    </div>
  );
}