import React, { Component } from 'react';

import Header from '../../components/landing/Header/Header';

import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Header />
      </div>
    );
  }
}

export default Landing;
