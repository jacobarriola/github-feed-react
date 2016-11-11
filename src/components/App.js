import React, { Component } from 'react';
import Header from './Header';
import Events from './Events';

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
