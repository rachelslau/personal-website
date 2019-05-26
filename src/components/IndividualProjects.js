import React, { Component } from 'react';
import '../Overall.css';

class App extends Component {
  render() {
    return (
        <a href={this.props.url} className="button iproject-button">
          <p className="iproject-text">{this.props.name}</p>
        </a>
    );
  }
}

export default App;
