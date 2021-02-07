import React from 'react';

class Main extends React.Component {
  
  render() {
    return(
      <main>
        <div className='row center'>
          <div className='card'>
            <a href="product.html">
              <img className='medium' src='./images/p1.jpg' alt='product'></img>
            </a>
            <div className='card-body'>
              <a href='product.html'>
                <h2>Worlds</h2>
              </a>
              <div className='rating'>
                <span><i className='fa fa-star'></i></span>
                <span><i className='fa fa-star'></i></span>
                <span><i className='fa fa-star'></i></span>
                <span><i className='fa fa-star'></i></span>
                <span><i className='fa fa-star'></i></span>
              </div>
              <div className='price'>
                17.99
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;