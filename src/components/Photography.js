import React, { Component } from 'react';
import '../Overall.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="photo-left">
          <h>PHOTOGRAPHY</h>
          <br/><br/>
          <p className="text">shot with iPhone 8+</p>
          <p className="text">trying to capture the little memories</p>
          <button className="photo-button text">landscape</button>
          <button className="photo-button text">people</button>
          <button className="photo-button text">misc.</button>
          <div className="button-box photography-buttons">
            <Link className="home-button" to='/'>home</Link>
          </div>
        </div>
        <div className="photo-right">
        </div>
      </div>
    );
  }
}

export default App;
