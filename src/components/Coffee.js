import React, { Component } from 'react';
import '../Overall.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="background">
        <h>COFFEE</h>
        <div className="button-box">
          <Link className="home-button" to='/'>home</Link>
          <Link className="home-button next-button" to='/photography'>photography</Link>
        </div>
      </div>
    );
  }
}

export default App;
