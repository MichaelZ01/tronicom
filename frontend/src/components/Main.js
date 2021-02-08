import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductScreen from '../routes/ProductScreen';
import HomeScreen from '../routes/HomeScreen';

class Main extends React.Component {
  
  render() {
    return(
      <main>
        <Switch>
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