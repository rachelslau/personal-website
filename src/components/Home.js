import React, { Component } from 'react';
import '../Overall.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image">
          <h className="home-title">RACHEL LAU</h>
          <br/>
          <p className="text">
            <Link className="home-route-button text" to='/about-me'>about me</Link>
            &nbsp;•&nbsp;
            <Link className="home-route-button text" to='/projects'>projects</Link>
            &nbsp;•&nbsp;
            <Link className="home-route-button text" to='/coffee'>coffee</Link>
            &nbsp;•&nbsp;
            <Link className="home-route-button text" to='/photography/landscape'>photography</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
