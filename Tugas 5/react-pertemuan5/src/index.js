import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ParamsExample from './ParamsExample';
import NestingExample from './NestingExample';
import AuthExample from './AuthExample';
import MarketPlace from './MarketPlace';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ParamsExample/> */}
    {/* <NestingExample/> */}
    {/* <AuthExample/> */}
    <MarketPlace/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();