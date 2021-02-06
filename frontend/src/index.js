import React from 'react';
import ReactDOM from 'react-dom';

// Top level React component
import App from './App.js'

class AppWrapper extends React.Component {
  render() {
    return (
      <App />
    )
  }
}

ReactDOM.render(
  <AppWrapper />,
  document.getElementById('root')
);