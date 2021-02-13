import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { listProduct } from '../redux/actions';

  /* React hooks: Allows you to use React without classes
  - useState: State Hook -> Class state: Sets up state variables:
      constructor function, this.setState

  - useEffect: Effect Hook -> Runs function when certain events occur:
      componentDidMount, componentDidUpdate, componentWillUnmount combined

  - useSelector: -> Get data from Redux store:
      Approximately equivalent to the mapStateToProps argument to connect
  */

  // Renders the HomeScreen
export default function HomeScreen() {

  // useSelector subscribes to the store and runs the selector whenever an action
  // is dispatched, updating productList
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // Only way to update the state is to call dispatch and pass in an action
  const dispatch = useDispatch();
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

  // Implementation without redux
  
  /*
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

  useEffect(() => {

    const fetchData = async () => {

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