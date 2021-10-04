import React from 'react';
import ReactDOM from 'react-dom';
import './styles/login.css'
import './styles/navbar.css'
import './styles/footer.css'
import './styles/registro.css'
import './styles/listarProducto.css'
import './styles/index.css'
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux'
import {store} from './store/store'
import { Container } from './components/Container';






ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
    
  </Provider>,
  document.getElementById('root')
);

