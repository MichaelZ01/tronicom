import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CartScreen from '../routes/CartScreen';
import ProductScreen from '../routes/ProductScreen';
import HomeScreen from '../routes/HomeScreen';
import { useSelector } from 'react-redux';

// Main view of page
export default function Main(props)  {
  
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  return(
    <main>
      <Switch>
        <Route path='/cart/:id?' component={CartScreen}></Route>
        <Route path='/product/:id' component={ProductScreen}></Route>
        <Route path='/'>
          <HomeScreen />
        </Route>
      </Switch>
    </main>
  );
}

