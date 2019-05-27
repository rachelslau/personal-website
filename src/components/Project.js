import React, { Component } from 'react';
import '../Overall.css';
import { Link } from 'react-router-dom';
import Project from './IndividualProjects.js';

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="left">
          <h className="project-title">PROJECTS</h>
          <p className="text">Although I’ve only recently started coding, here are some things I have created during my programming journey so far.</p>
        </div>
        <div className="button-box">
          <Link className="home-button" to='/'>home</Link>
          <Link className="home-button next-button" to='/coffee'>coffee</Link>
        </div>
        <div className="project-right">
          <div className="project-scroll">
            <Project
              url="http://judging-portal.herokuapp.com/"
              name="Hackathon Portal" />
            <Project
              url="https://www.youtube.com/watch?v=pD4UsNHHnMk&feature=youtu.be"
              name="Build Your Own World" />
            <Project
              url="https://rachelslau.github.io/morning-tea/"
              name="Morning Tea" />
            <Project
              url="https://rachelslau.github.io/p5/empty-example"
              name="24 Points Game" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
