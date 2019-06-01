import React, { Component } from 'react';
import '../Overall.css';
import { Link } from 'react-router-dom';
import Cat from './pictures/coffee/cat-coffee.gif';

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="left">
          <h>COFFEE</h>
          <img className="coffee-gif" src={Cat} alt="cat coffee gif" width="250px"/>
        </div>
        <div className="button-box">
          <Link className="home-button" to='/'>home</Link>
          <Link className="home-button next-button" to='/photography/landscape'>photography</Link>
        </div>
        <div className="coffee-right">
          <p className="text coffee-blurb">
            Before coming to college, I never thought I would be a coffee person.
            I couldn’t even walk into Starbucks without getting dizzy from the smell of coffee.
            But now that I’m pulling long nights and actually need a caffeine kick every once in a while,
            I decided to make a blog where I review drinks from some of the coffee shops I’ve visited during early mornings and late nights.
            <br/><br/>
            Check it out&nbsp;
            <a className="coffee-link" href="https://anticoffeecoffeeclub.tumblr.com/">here</a>
            !
            <br/><br/>
            p.s. I'm always looking for new places and drinks to try.
            If you have any suggestions, feel free to comment them on the sidebar of my blog! 
          </p>
        </div>
      </div>
    );
  }
}

export default App;
