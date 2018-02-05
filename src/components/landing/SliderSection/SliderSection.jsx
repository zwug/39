import React, { Component } from 'react';

import './SliderSection.css';

const SLIDERS_COUNT = 3;

class SliderSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderIndex: 0,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        sliderIndex: (this.state.sliderIndex + 1) % SLIDERS_COUNT,
      })
    }, 5000);
  }

  renderSlides() {
    const slides = [];
    for (let i = 0; i < SLIDERS_COUNT; i++) {
      let className = `promo-img promo-img-${i}`;
      className += this.state.sliderIndex === i ? ' promo-img-active' : '';
      slides.push(<div className={className} key={i} />);
    }

    return slides
  }

  render() {
    return (
      <section className="landing-slider">
        <h1>Танцы в тридевятом</h1>
        <div className="landing-slider-container">
          {this.renderSlides()}
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
