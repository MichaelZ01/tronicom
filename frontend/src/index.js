import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Top level React component
import App from './App.js'

// React Router
class AppWrapper extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  }
}

// Renders the React app at the root div in index.html
ReactDOM.render(
  <AppWrapper />,
  document.getElementById('root')
);