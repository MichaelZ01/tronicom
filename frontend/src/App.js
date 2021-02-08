import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

import './style.css';

class App extends React.Component {

  render() {
    return(
      <div className = 'grid-container'>
        <Header />
        <Main />
        <footer>
          <div>Created by MichaelZ01</div>
        </footer>
      </div>
    );
  }
}

export default App;