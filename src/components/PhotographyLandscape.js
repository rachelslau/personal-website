import React, { Component } from 'react';
import '../Overall.css';
import { Link } from 'react-router-dom';
import Photo from './IndividualPhotos.js';
import LittleTokyo from './pictures/photos/landscape/littletokyo.jpg';
import Tahoe from './pictures/photos/landscape/laketahoe.jpg';

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="left photo-left">
          <h>PHOTOGRAPHY</h>
          <br/><br/>
          <p className="text">shot with iPhone 8+</p>
          <p className="text">trying to capture the little memories</p>
          <Link className="photo-button photo-button-on text" to='/photography/landscape'>landscape</Link>
          <Link className="photo-button text" to='/photography/people'>people</Link>
          <Link className="photo-button text" to='/photography/misc'>misc.</Link>
        </div>
        <div className="button-box">
          <Link className="home-button" to='/'>home</Link>
        </div>
        <div className="photo-right">
          <Photo picture={LittleTokyo} description="little-tokyo"/>
          <Photo picture={Tahoe} description="lake-tahoe"/>
        </div>
      </div>
    );
  }
}

export default App;
