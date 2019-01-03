import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    users:[]
  }

  componentDidMount() {
    fetch('/users')
      .then(response => response.json())
      .then(users => this.setState({ users }))
  }

  render() {
    return (
      <div className="App">
          <h1>Users</h1>
          {this.state.users.map(user =>
            <p>{user.username}</p>
          )}
      </div>
    );
  }
}

export default App;
