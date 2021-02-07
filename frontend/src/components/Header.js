import React from 'react';

class Header extends React.Component {

  render() {
    return(
      <header className='row'>
        <div className='brand'>
          <span>
            <i className='fa fa-music'></i>
          </span>
          <a href='index.html'>Tronicom</a>
        </div>
        <div>
          <a href='cart.html'>Cart</a>
          <a href='signin.html'> Sign in</a>
        </div>
      </header>
    );
  }
}

export default Header;