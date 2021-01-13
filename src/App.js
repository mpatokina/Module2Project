import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Civilservice from './components/Civilservicelist.js';
import Payrolldata from './components/Payrolldata.js';
import Titles from './components/Civilservicetitles.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import './App.css';


import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Navbar />
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/all">Civil Service List</Link>
            </li>
            <li>
              <Link to="/list">Citywide Payroll Data</Link>
            </li>
            <li>
              <Link to="/images">Civil Service Titles</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/all">
              <Civilservice />
            </Route>
            <Route path="/list">
              <Payrolldata />
            </Route>
            <Route path="/images">
              <Titles />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
      </div>
    );
  }
}




class SubBreeds extends React.Component {
  render() {
    return(
      <h1>SubBreeds component works!</h1>
    )
  }
}

class Image extends React.Component {
  render() {
    return(
      <h1>Image component works!</h1>
    )
  }
}

export default App;
