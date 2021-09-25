import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.css'
import './styles/navbar.css'
import AppRouter from './routers/AppRouter';





ReactDOM.render(
  <React.StrictMode>
      <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
;
