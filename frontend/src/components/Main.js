import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CartScreen from '../routes/CartScreen';
import ProductScreen from '../routes/ProductScreen';
import HomeScreen from '../routes/HomeScreen';
import SigninScreen from '../routes/SigninScreen';
import RegisterScreen from '../routes/RegisterScreen';
import ShippingScreen from '../routes/ShippingScreen';

// Main view of page
export default function Main(props)  {
  
  return(
    <main>
      <Switch>
        <Route path='/cart/:id?' component={CartScreen}></Route>
        <Route path='/product/:id' component={ProductScreen}></Route>
        <Route path='/signin' component={SigninScreen}></Route>
        <Route path='/register' component={RegisterScreen}></Route>
        <Route path='/shipping' component={ShippingScreen}></Route>
        <Route path='/'>
          <HomeScreen />
        </Route>
      </Switch>
    </main>
  );
}

