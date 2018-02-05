import React, { Component } from 'react';

import Photo from '../Photo/Photo';

import './ExpectationSection.css';

class ExpectationSection extends Component {
  render() {
    return (
      <section className="landing-expectation">
        <h2>Что тебя ждет</h2>
        <div className="landing-expectation-photos">
          <Photo title="15 танцев" name="dances" />
          <Photo title="15 танцев" name="dances" />
        </div>
      </section>
    );
  }
}

export default ExpectationSection;
