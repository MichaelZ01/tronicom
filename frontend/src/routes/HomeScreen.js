import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function HomeScreen() {

  /*
  React hook:
  - allow you to use React without classes
  - useState: State Hook -> 
      Similar to a state class with a constructor state and this.setState
  - useEffect: Effect Hook -> 
      (componentDidMount, componentDidUpdate, componentWillUnmount)
  */

  // Declare new state variables 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {

    // Async is just special syntax for promises
    const fetchData = async () => {

      // Attempt to retrieve data from backend
      try {
        setLoading(true)
        const { data } = await axios.get('/api/products');
        setLoading(false);
        setProducts(data);
      } catch(err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [])

  return(
    <div>
      {loading ? ( <LoadingBox></LoadingBox>
      ) : error ? ( <MessageBox varient='error'>{error}</MessageBox>
      ) : (
        <div className='row center'>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )} 
    </div>

  );
}