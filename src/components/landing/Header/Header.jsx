import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="landing-header">
        <div className="landing-header-title">
          Тридевятое
        </div>
        <div className="landing-header-crown"></div>
        <div className="landing-header-phone-container">
          <a className="landing-header-phone-number" href="tel:5551234567">
            8(909)111-22-33
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
