import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Overall.css';
import Home from './components/Home.js';
import About from './components/AboutMe.js';
import Project from './components/Project.js';
import Coffee from './components/Coffee.js';
import Photography from './components/Photography.js';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about-me' component={About} />
        <Route path='/projects' component={Project} />
        <Route path='/coffee' component={Coffee} />
        <Route path='/photography' component={Photography} />
      </Switch>
    );
  }
}

export default App;
