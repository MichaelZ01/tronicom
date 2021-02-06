import React from 'react';

class Main extends React.Component {
  
  render() {
    return(
      <main>
        <div>


        </div>
        <div className='product'>
          <a href="product.html">
            <img src='./images/product-1.jpg' alt='product'></img>
          </a>
          <div className='product-body'>
            <a href='product.html'>
              <h2>Worlds</h2>
            </a>
            <div class='rating'>
              <span>
                <i class='fa fa-start'></i>
              </span>
            </div>
            <div class='price'>
              120
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;