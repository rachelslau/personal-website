import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Overall.css';
import Home from './components/Home.js';
import About from './components/AboutMe.js';
import Project from './components/Project.js';
import Coffee from './components/Coffee.js';
import Landscape from './components/PhotographyLandscape.js';
import People from './components/PhotographyPeople.js';
import Misc from './components/PhotographyMisc.js';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about-me' component={About} />
        <Route path='/projects' component={Project} />
        <Route path='/coffee' component={Coffee} />
        <Route path='/photography/landscape' component={Landscape} />
        <Route path='/photography/people' component={People} />
        <Route path='/photography/misc' component={Misc} />
      </Switch>
    );
  }
}

export default App;
