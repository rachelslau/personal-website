import React, { Component } from 'react';
import '../Overall.css';

class App extends Component {
  render() {
    return (
        <a href={this.props.url} className="button iproject-button">
          <img className="iproject-img" src={this.props.picture} alt={this.props.description} width="250px" height="250px"/>
          <p className="iproject-text">{this.props.name}</p>
        </a>
    );
  }
}

export default App;
