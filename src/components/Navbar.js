import React from 'react';



import axios from 'axios';
import './Navbar.css';


class Navbar extends React.Component {
    render() {
      return(
        <div>
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
      )
    }
  }

export default Navbar;