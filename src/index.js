import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.css'
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router basename="/paperstr">
    <App/>
  </Router>,
  document.getElementById('root')
);

