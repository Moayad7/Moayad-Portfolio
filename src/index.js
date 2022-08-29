import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import background from './components/Images/Background-01.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className={`bg-[url('${background}')]`} >
    <App/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
