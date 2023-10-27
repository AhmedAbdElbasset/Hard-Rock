import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { useDispatch } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import CartReducer, { getTotal } from './Store/CartSlice';
const root = ReactDOM.createRoot(document.getElementById('root'));
const Store = configureStore({
  reducer: {
    cart:CartReducer
  }
})
const dispatch = useDispatch
Store.dispatch(getTotal())

root.render(
  <React.StrictMode>
      <Provider store={Store}>
        <App />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
