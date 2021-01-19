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
        
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/titles">Civil Service Titles</Link>
            </li>
            <li>
              <Link to="/list">Civil Service List</Link>
            </li>
            <li>
              <Link to="/data">Citywide Payroll Data</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/titles">
              <Titles />
            </Route>
            <Route path="/list">
              <Civilservice />
            </Route>
            <Route path="/data">
              <Payrolldata />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
      </div>
    );
  }
}


export default App;
