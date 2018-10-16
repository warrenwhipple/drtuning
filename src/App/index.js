import React, { Component } from 'react';
import CardScroll from '../CardScroll';
import ReviewCard from '../ReviewCard';
import reviews from '../data/reviews.json';
import './index.css';

class App extends Component {
  render() {
    const reviewCards = reviews.map(({ image, title, subtitle, quote }) => (
      <ReviewCard key={title} image={image} title={title} subtitle={subtitle} quote={quote} />
    ));

    return (
      <div className="App">
        <header className="header">
          <h1 className="name">Don Raleigh</h1>
          <p className="job">Piano Tuner</p>
          <ul className="locations">
            <li>Carrboro</li>
            <li>Chapel Hill</li>
            <li>Durham</li>
            <li>Raleigh</li>
          </ul>
        </header>
        <div className="bio">
          <div className="imageWrapper">
            <img src="don.jpg" alt="Don Raleigh" />
          </div>
          <p className="text">
            I’ve worked in the professional music world more than 30 years as a
            performer, producer, technician, and piano tuner.
          </p>
        </div>
        <div className="reviews">
          <h2>Reviews</h2>
          <CardScroll children={reviewCards} />
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <p>
            For any questions, or to set up an appointment, please email, text,
            or call me.
          </p>
          <p>COMPONENT PLACEHOLDER</p>
        </div>
        <div className="prices">
          <h2>Prices</h2>
          <p>COMPONENT PLACEHOLDER</p>
        </div>
        <div className="questions">
          <h2>Questions</h2>
          <p className="question">How often should I tune my piano?</p>
          <p className="answer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="question">Why does tuning take so long?</p>
          <p className="answer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="question">Why wait between a pitch raise and a tune?</p>
          <p className="answer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="links">
          <p>COMPONENT PLACEHOLDER</p>
        </div>
      </div>
    );
  }
}

export default App;
