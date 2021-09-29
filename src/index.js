import React from 'react';
import ReactDOM from 'react-dom';
import './styles/login.css'
import './styles/navbar.css'
import './styles/footer.css'
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux'
import {store} from './store/store'





ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

