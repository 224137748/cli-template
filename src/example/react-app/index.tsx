import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './src/app/store';
import './index.css';
import {Provider} from 'react-redux'

const render = () => {
  const App = require('./src/App').default;
  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
  );
};

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./src/App', render);
}