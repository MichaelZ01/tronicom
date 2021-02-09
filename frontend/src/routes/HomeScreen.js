import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../redux/actions';

  /*
  React hooks:
  - allow you to use React without classes
  - useState: State Hook -> 
      Similar to a state class with a constructor state and this.setState
  - useEffect: Effect Hook -> 
      (componentDidMount, componentDidUpdate, componentWillUnmount)
  - useSelector: Extract data from Redux store ->
      Approximately equivalent to the mapStateToProps argument to connect
  */

export default function HomeScreen() {

  // Redux implementation
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

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

  // Using React component

  // Declare new state variables 
  //const [products, setProducts] = useState([]);
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(false);

  // Similar to componentDidMount and componentDidUpdate
  /* 
  useEffect(() => {

    // Async is just special syntax for promises
    const fetchData = async () => {

      // Attempt to retrieve data from backend using ajax
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
  */


}