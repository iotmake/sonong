import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        native page test !!
        <Sub title="111"  sub="aaaaaaa"> </Sub>
      </div>
    );
  }
}

class Sub extends Component {
  render() {
    return (
      <header>
        <h1> {this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}
export default App;
