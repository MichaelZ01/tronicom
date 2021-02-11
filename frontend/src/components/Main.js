import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CartScreen from '../routes/CartScreen';
import ProductScreen from '../routes/ProductScreen';
import HomeScreen from '../routes/HomeScreen';

// Main view of page
class Main extends React.Component {
  
  render() {
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
}

export default Main;