const add = require('./add');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './app.css';

class App extends Component {
  render() {
    return <h1 className="title">Hello!</h1>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

console.log('9876 + 1546 = ', add(9876, 546));
