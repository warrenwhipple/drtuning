import React, { Component } from 'react';
import CardScroll from '../CardScroll';
import ReviewCard from '../ReviewCard';
import PriceCard from '../PriceCard';
import LabeledButton from '../LabeledButton';
import reviewsData from '../data/reviews.json';
import pricesData from '../data/prices.json';
import mobileIcon from '../images/mobile-icon.svg';
import emailIcon from '../images/email-icon.svg';
import googleIcon from '../images/google-icon.svg';
import yelpIcon from '../images/yelp-icon.svg';
import sideFlourishL from '../images/side-flourish-l.svg';
import sideFlourishR from '../images/side-flourish-r.svg';
import './index.css';

class App extends Component {
  render() {
    const reviewCards = reviewsData.map(reviewData => (
      <ReviewCard key={reviewData.title} reviewData={reviewData} />
    ));
    const priceCards = pricesData.map(priceData => (
      <PriceCard key={priceData.service} priceData={priceData} />
    ));

    return (
      <div className="App">
        <header className="header">
          <h1 className="name">Don Raleigh</h1>
          <p className="job">Piano Tuner</p>
          <p className="locations">Carrboro • Chapel Hill • Durham • Raleigh</p>
        </header>
        <div className="bio">
          <div className="profileFlourishWrapper">
            <div className="flourishWrapper">
              <img src={sideFlourishL} className="flourishImage" alt="" />
            </div>
            <div className="profileWrapper">
              <img src="don.jpg" className="profileImage" alt="Don Raleigh" />
            </div>
            <div className="flourishWrapper">
              <img src={sideFlourishR} className="flourishImage" alt="" />
            </div>
          </div>
          <div className="paraWrapper">
            <div className="para">
              I’ve worked in the professional music world more than 30 years as
              a performer, producer, technician, and piano tuner.{' '}
            </div>
          </div>
        </div>
        <div className="reviews">
          <h2>Reviews</h2>
          <CardScroll children={reviewCards} />
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <div className="paraWrapper">
            <div className="para">
              For any questions, or to set up an appointment, please email,
              text, or call me.
            </div>
          </div>
          <div className="buttonsWrapper">
            <LabeledButton
              icon={mobileIcon}
              iconAlt="mobile"
              label="919 555 1234"
              link="tel:+19199231234"
            />
            <LabeledButton
              icon={emailIcon}
              iconAlt="email"
              label="bdraleigh@gmail.com"
              link="mailto:bdraleigh@gmail.com"
            />
          </div>
        </div>
        <div className="prices">
          <h2>Prices</h2>
          <CardScroll children={priceCards} />
        </div>
        <div className="questions">
          <h2>Questions</h2>
          <div className="paraWrapper">
            <div className="question">How often should I tune my piano?</div>
            <div className="answer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="question">Why does tuning take so long?</div>
            <div className="answer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="question">
              Why wait between a pitch raise and a tune?
            </div>
            <div className="answer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <div className="links">
          <LabeledButton
            icon={mobileIcon}
            iconAlt="text or call"
            label="Text / Call"
            link="tel:+19199231234"
            small
          />
          <LabeledButton
            icon={emailIcon}
            iconAlt="email"
            label="Email"
            link="mailto:bdraleigh@gmail.com"
            small
          />
          <LabeledButton
            icon={googleIcon}
            iconAlt="Google Maps"
            label="Maps"
            link="https://maps.google.com/maps?cid=9937652089938202035"
            small
          />
          <LabeledButton
            icon={yelpIcon}
            iconAlt="Yelp"
            label="Yelp"
            link="https://www.yelp.com/biz/don-raleigh-piano-tuning-carrboro"
            small
          />
        </div>
      </div>
    );
  }
}

export default App;
