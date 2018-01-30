import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import promo1Img from '../../../assets/img/promo-1.jpg'

import './SliderSection.css';

class SliderSection extends Component {
  render() {
    return (
      <section className="landing-slider-section">
        <h1>Танцы в тридевятом</h1>
        <Carousel>
            <div>
                <img src={promo1Img} />
                <p className="legend">Legend 1</p>
            </div>
        </Carousel>
      </section>
    );
  }
}

export default SliderSection;
