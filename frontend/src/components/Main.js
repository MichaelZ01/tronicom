import React from 'react';
import Product from './Product';
import data from '../data';

class Main extends React.Component {
  
  render() {
    return(
      <main>
        <div className='row center'>
          {data.products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
          
        </div>
      </main>
    );
  }
}

export default Main;