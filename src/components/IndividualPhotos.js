import React, { Component } from 'react';
import '../Overall.css';

class App extends Component {
  render() {
    return (
        <img className="iphoto" src={this.props.picture} alt={this.props.description} width="200px" height="200px"/>
    );
  }
}

export default App;
