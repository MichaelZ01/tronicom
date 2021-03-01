import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signin } from '../redux/actions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

// Sign in page
export default function SigninScreen(props) {

  // Create state variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Get state variables
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();

  // Submit sign in form
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  }

  // User is redirected after signing in
  const redirect = props.location.search 
    ? props.location.search.split('=')[1]
    : '/';
  useEffect(() => {
    if(userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo])


  return (
    <div>
      <form 
        className="form" 
        onSubmit={submitHandler}
      >
        <div>
          <h1>Sign In</h1>
        </div>
        {loading && <LoadingBox />}
        {error && <MessageBox >{error}</MessageBox>}
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign in
          </button>
        </div>
        <div>
          <label />
          <div>
            New? <Link to={`/register?redirect=${redirect}`}>Sign up</Link>
          </div>
        </div>
      </form>
    </div>
  );
}