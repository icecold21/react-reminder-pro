import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './components/MainApp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
  // Provider is providing data / state store to your application.
  // Within Redux all application state exist as a store in single objec, reducer do is take the state and modify the state in pure way.
  // You never mutate the state directly
  <Provider store={ store }>
    <MainApp />
  </Provider>, document.getElementById('root')
);


