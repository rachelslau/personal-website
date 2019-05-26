import React, { Component } from 'react';
import '../Overall.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="about-me-left">
          <h>ABOUT<br/>ME</h>
        </div>
        <div className="about-me-right">
          <p className="text about-me-blurb">Hey you! I hope you’re having a great day today.<br/><br/>
            I’m Rachel, a third year studying Data Science at UC Berkeley. My career interests currently include data analysis, UI/UX design, and software development.<br/><br/>
            In addition to dedicating countless hours debugging my spelling errors and listening to advice podcasts, I enjoy thrift shopping, bullet journaling, and binge watching Friends (at 1.3x speed).<br/><br/>
            Feel free to reach out through email or stalk me on social media!
          </p>
          <div className="button-box">
            <Link className="home-button" to='/'>home</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
