import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Helmet } from 'react-helmet';
import './assets/styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Rick Schultz Curriculum</title>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
