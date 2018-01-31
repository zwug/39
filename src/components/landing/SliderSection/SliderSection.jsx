import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// import promo1Img from '../../../assets/img/promo-1.jpg'

import './SliderSection.css';

class SliderSection extends Component {
  render() {
    return (
      <section className="landing-slider">
        <h1>Танцы в тридевятом</h1>
        <div className="landing-slider-container">
          <div className="promo-img promo-img-1"></div>
          <div className="promo-img promo-img-2"></div>
        </div>
        <div className="landing-slider-bottom">
          <p>Поговаривают, что после наших мероприятий еще никто не уходил с плохим настроением</p>
          <button className="landing-slider-bottom-btn">Участвовать</button>
        </div>
      </section>
    );
  }
}

export default SliderSection;
