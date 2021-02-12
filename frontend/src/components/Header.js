import React from 'react';
import { Link } from 'react-router-dom';

// The Website header
class Header extends React.Component {

  render() {
    return(
      <header className='row'>
        <div className='brand'>
          <span>
            <i className='fa fa-music'></i>
          </span>
          <Link to='/'>Tronicom</Link>
        </div>
        <div>
          <Link to='/cart'>Cart</Link>
          <Link to='/signin'> Sign in</Link>
        </div>
      </header>
    );
  }
}

export default Header;