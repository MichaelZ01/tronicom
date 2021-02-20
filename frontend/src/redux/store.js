import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

// Create redux store
// - Reducer: Function that takes current state and a action and returns a new state
// - Initial state
// - Compose is used when you want to pass multiple 'store enhances' to the store,
//     the only store enhancer provided with redux is applyMiddleWare. Apply middleware
//     is used to support async actions

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    },
    cartAdd: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingAddress: localStorage.getItem('shippingAddress')
            ? JSON.parse(localStorage.getItem('shippingAddress'))
            : [],
    },
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
    rootReducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
);