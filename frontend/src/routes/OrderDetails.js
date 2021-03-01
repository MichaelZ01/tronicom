import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CheckoutSteps from '../components/CheckoutSteps';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsOrder } from '../redux/actions';

export default function OrderDetails(props) {

  const orderId = props.match.params.id;
  const orderDetails = useSelector(state => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsOrder(orderId));
  }, [dispatch, orderId]);

  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox>{error}</MessageBox>
  ): (
    <div>
      <h1>Order {order._id}</h1>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                  <strong>Adress:</strong> {order.shippingAddress.address},
                  {order.shippingAddress.city}, {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered 
                ? <MessageBox>Deliveared at {order.deliveredAt}</MessageBox>
                  : <MessageBox>Not Delivered</MessageBox>
                }
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {order.paymentMethod} <br />
                </p>
                {order.isPaid
                ? <MessageBox>Deliveared at {order.paidAt}</MessageBox>
                  : <MessageBox>Not Paid</MessageBox>
                }
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <ul>
                  {order.orderItems.map((item) => (
                    <li key={item.product}>
                      <div className='row cart'>
                        <img 
                          src={item.image}
                          alt={item.name}
                          className='small'
                        />
                        <div className='min-30'>
                          <Link to={`/product/${item.product}`}>{item.name}</Link>
                        </div>
                        <div>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>${order.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>${order.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>${order.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div><strong>Total</strong></div>
                  <div>${order.totalPrice.toFixed(2)}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}