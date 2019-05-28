import React, { Component } from 'react';
import '../Overall.css';
import { Link } from 'react-router-dom';
import Photo from './IndividualPhotos.js';
import GraceG from './pictures/photos/people/gracegriffiths.jpg';
import RayEm from './pictures/photos/people/rayem.jpg';

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="left photo-left">
          <h>PHOTOGRAPHY</h>
          <br/><br/>
          <p className="text">shot with iPhone 8+</p>
          <p className="text">trying to capture the little memories</p>
          <Link className="photo-button text" to='/photography/landscape'>landscape</Link>
          <Link className="photo-button photo-button-on text" to='/photography/people'>people</Link>
          <Link className="photo-button text" to='/photography/misc'>misc.</Link>
        </div>
        <div className="button-box">
          <Link className="home-button" to='/'>home</Link>
        </div>
        <div className="photo-right">
          <Photo picture={GraceG} description="grace-griffiths"/>
          <Photo picture={RayEm} description="ray-em"/>
        </div>
      </div>
    );
  }
}

export default App;
