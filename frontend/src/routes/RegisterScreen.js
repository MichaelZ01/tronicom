import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { register } from '../redux/actions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

// User register screen
export default function RegisterScreen(props) {

  // Create state variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Get state variables
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  // Submit register form
  const dispatch = useDispatch();
  const submitHandler =(e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      dispatch(register(name, email, password));
    }
  }

  // User is redirected after registering
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
          <h1>Register</h1>
        </div>
        {loading && <LoadingBox />}
        {error && <MessageBox >{error}</MessageBox>}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          <label htmlFor="confirmpassword"> Confirm Password</label>
          <input
            type="password"
            id="confirmpassword"
            placeholder="Enter confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Already Signed up? <Link to={`/signin?redirect=${redirect}`}>Sign in</Link>
          </div>
        </div>
      </form>
    </div>
  );
}