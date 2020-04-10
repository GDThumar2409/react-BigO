import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Home from './Home'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Home'
    };
  }
  
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
