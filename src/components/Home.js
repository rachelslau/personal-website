import React, { Component } from 'react';
import '../Overall.css';
import { Link } from 'react-router-dom';
import Profile from './pictures/profile.jpg';

class App extends Component {
  render() {
    return (
      <div className="home-screen">
        <img className="home-picture" src={Profile} width="100%"/>
        <div className="background-text">
          <h className="home-title">RACHEL LAU</h>
          <br/>
          <p className="text">
            <Link className="home-route-button" to='/about-me'>about me</Link>
            &nbsp;•&nbsp;
            <Link className="home-route-button" to='/projects'>projects</Link>
            &nbsp;•&nbsp;
            <Link className="home-route-button" to='/coffee'>coffee</Link>
            &nbsp;•&nbsp;
            <Link className="home-route-button" to='/photography/landscape'>photography</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
