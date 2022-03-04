import React from 'react';
import App from './App';
//router
import ReactDOM from 'react-dom';
//redux
import { Provider } from 'react-redux';
import store from './redux/store';
//styles
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';


console.log('store ',store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


