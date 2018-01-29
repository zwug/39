import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Landing from './containers/Landing/Landing'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/promo" component={Landing}/>
        </div>
      </Router>
    );
  }
}

export default App;
