import React, { Component } from 'react';

import './Photo.css';

const Photo = (props) => (
  <div className="landing-photo">
    <h3>{props.title}</h3>
    <div className={`landing-photo-img ${props.name}`} />
  </div>
);

export default Photo;
