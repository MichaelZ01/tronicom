import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../redux/actions';

// Payment method screen
export default function PaymentScreen(props) {

  // Create state variable
  const [ paymentMethod, setPaymentMethod ] = useState('Paypal');

  // Get state variable
  const cart = useSelector(state => state.cartAdd);
  const { shippingAddress } = cart

  // If user has not chosen shipping method, redirect to shipping screen
  if(!shippingAddress.address) {
    props.history.push('/shipping');
  }

  // Submit payment form
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push('/placeorder');
  }

  return (
    <div>
      <CheckoutSteps step1 step2 step3 />
      <form 
        className="form" 
        onSubmit={submitHandler}
      >
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="Paypal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <label htmlFor="paypal">Paypal</label>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <label htmlFor="stripe">Stripe</label>
        </div>
        <div>
          <button className="primary" type="submit">Continue</button>
        </div>
      </form>
    </div>
  )
}