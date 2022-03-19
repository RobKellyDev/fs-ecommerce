import React from 'react';
import App from './App';
//router
import ReactDOM from 'react-dom';
//redux
import { Provider } from 'react-redux';
import store from './redux/store';
//styles
import './styles/index.css';

window.store = store;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
