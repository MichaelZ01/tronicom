import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../redux/actions';

// The Website header
export default function Header() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }

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
        {
          userInfo ? (
            <div className="dropdown">
              <Link to="#">
                {userInfo.name} 
                <i className="fa fa-caret-down"/>
              </Link>
              <ul className="dropdown-content">
                <Link 
                  to="#signout" 
                  onClick={signoutHandler}>
                  Sign out
                </Link>
              </ul>
            </div>
          ) :
          (
            <Link to='/signin'> Sign in</Link>
          )
        }
      </div>
    </header>
  );
}
