import React from 'react';
import data from '../data';

class Main extends React.Component {
  
  render() {
    return(
      <main>
        <div className='row center'>
          {data.products.map((product) => (
            <div key={product._id} className='card'>
              <a href={`../products/${product._id}`}>
                <img className='medium' 
                  src={product.image} 
                  alt={product.name}>
                </img>
              </a>
              <div className='card-body'>
                <a href={`../products/${product._id}`}>
                  <h2>{product.name}</h2>
                </a>

                <div className='rating'>
                  <span><i className='fa fa-star'></i></span>
                  <span><i className='fa fa-star'></i></span>
                  <span><i className='fa fa-star'></i></span>
                  <span><i className='fa fa-star'></i></span>
                  <span><i className='fa fa-star'></i></span>
                </div>
                <div className='price'>
                  ${product.price}
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </main>
    );
  }
}

export default Main;