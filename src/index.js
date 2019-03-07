import React, { Component } from 'react';
import ReactDOM from 'react-dom'; // import the ReactDOM library
import './index.css';
import Comp from './Comp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Comp />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();