import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



import axios from 'axios';
import './Navbar.css';
import About from './About.js';
import Aboutme from './Aboutme.js';
import Aboutps from './Aboutps.js';
import Home from './Home.js';


class Navbar extends React.Component {
    render() {
      return(

        <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About this project</Link>
            </li>
            <li>
            <Link to="/aboutme">About me</Link>
            </li>
            <li>
            <Link to="/aboutps">About Per Scholas</Link>
            </li>
          </ul>
          <Switch>
          <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/aboutme">
              <Aboutme />
            </Route>
            <Route path="/aboutps">
              <Aboutps />
            </Route>
          </Switch>
        </div>
      </Router>



      )
    }
  }

export default Navbar;