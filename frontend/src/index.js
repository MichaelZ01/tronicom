import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store.js';

// Top level React component
import App from './App.js'


// React Router
class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
  }
}

// Renders the React app at the root div in index.html
ReactDOM.render(
  <AppWrapper />,
  document.getElementById('root')
);