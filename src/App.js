import React, { Component } from 'react';
import Header from './components/Header';
import Events from './components/Events';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Events />
      </div>
    );
  }
}

export default App;
