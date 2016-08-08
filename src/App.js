import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <UserGithubEvents source="https://api.github.com/users/jacobarriola/events?per_page=10"/>
        </div>
      </div>
    );
  }
}

var Header = React.createClass({
  render : function() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    )
  }
});

var UserGithubEvents = React.createClass({
  getInitialState: function() {
    return {
      items: [],
      userAvatar: ''
    };
  },
  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      let userInfoObject = result[0].actor;
      this.setState({
        items: result,
        userAvatar: userInfoObject.avatar_url
      });
    }.bind(this));
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  renderItems : function(key) {
    return (
      <Item key={key} index={key} details={this.state.items[key]}/>
    )
  },
  render: function() {
    return (
      <div>
        <h2>Public Github Events for Jacob Arriola</h2>
        <img src={this.state.userAvatar} alt="Jacobt Arriola" className="avatar"/>
        <ul className="list-of-items">
          {Object.keys(this.state.items).map(this.renderItems)}
        </ul>
      </div>
    );
  }
});

var Item = React.createClass({

  render : function() {
    return (
      <li>
        <ul className="item-list">
          <li>
            Event type: {this.props.details.type}
          </li>
          <li>
            Event ID: {this.props.details.id}
          </li>
          <li>
            Repo: <a href={'https://github.com/' + this.props.details.repo.name}>
              {this.props.details.repo.name}
            </a>
          </li>
          <li>
            Date: {this.props.details.created_at}
          </li>
        </ul>
      </li>
    )
  }
});


export default App;
