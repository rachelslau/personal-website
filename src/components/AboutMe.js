import React, { Component } from 'react';
import '../Overall.css';
import { Link } from 'react-router-dom';
import Vertical from './pictures/about/vertical.jpg';
import Horizontal from './pictures/about/horizontal.jpg';
import Mail from './pictures/about/email.png';
import GitHub from './pictures/about/github.png';
import LinkedIn from './pictures/about/linkedin.png';
import Instagram from './pictures/about/instagram.png';

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="left about-left">
          <img className="about-vertical" src={Vertical} alt="vertical picture" width="250vw"/>
          <h className="about-title">ABOUT<br/>ME</h>
          <img className="about-horizontal" src={Horizontal} alt="hoizontal picture" width="400vw"/>
        </div>
        <div className="button-box">
          <Link className="home-button" to='/'>home</Link>
          <Link className="home-button next-button" to='/projects'>projects</Link>
        </div>
        <div className="about-right">
          <p className="text about-blurb">Hey you! I hope you’re having a great day today.<br/><br/>
            I’m Rachel, a third year studying Data Science at UC Berkeley. My career interests currently include data analysis, UI/UX design, and software development.<br/><br/>
            In addition to dedicating countless hours debugging my spelling errors and listening to advice podcasts, I enjoy thrift shopping, bullet journaling, and binge watching Friends (at 1.3x speed).<br/><br/>
            Feel free to reach out through email or stalk me on social media!
          </p>
          <div className="contact-button-box">
            <a href="mailto:rachellau@berkeley.edu">
              <img className="contact-buttons" src={Mail} alt="email-link" width="27.5px" height="27.5px"/>
            </a>
            <a href="https://github.com/rachelslau">
              <img className="contact-buttons" src={GitHub} alt="github-link" width="27.5px" height="27.5px"/>
            </a>
            <a href="https://linkedin.com/in/rachel-s-lau">
              <img className="contact-buttons" src={LinkedIn} alt="linkedin-link" width="25px" height="25px"/>
            </a>
            <a href="https://instagram.com/raurlau">
              <img className="contact-buttons" src={Instagram} alt="instagram-link" width="25px" height="25px"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
