import React from 'react';

// The Website header
class Header extends React.Component {

  render() {
    return(
      <header className='row'>
        <div className='brand'>
          <span>
            <i className='fa fa-music'></i>
          </span>
          <a href='/'>Tronicom</a>
        </div>
        <div>
          <a href='/cart'>Cart</a>
          <a href='/signin'> Sign in</a>
        </div>
      </header>
    );
  }
}

export default Header;