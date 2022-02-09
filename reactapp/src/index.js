import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from "./components/Router";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);

reportWebVitals();
