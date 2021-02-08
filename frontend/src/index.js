import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Top level React component
import App from './App.js'

class AppWrapper extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <AppWrapper />,
  document.getElementById('root')
);