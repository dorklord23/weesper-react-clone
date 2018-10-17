import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/app-460052b1e9.css';
import './assets/css/assets-e0175e2f07.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
