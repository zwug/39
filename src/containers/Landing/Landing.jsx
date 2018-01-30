import React, { Component } from 'react';
import { FullPage, Slide } from 'react-full-page';

import Header from '../../components/landing/Header/Header';
import SliderSection from '../../components/landing/SliderSection/SliderSection';

import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Header />
        <FullPage>
          <Slide>
            <SliderSection/>
          </Slide>
          <Slide>
            <SliderSection/>
          </Slide>
        </FullPage>
      </div>
    );
  }
}

export default Landing;
