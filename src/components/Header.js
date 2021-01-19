import React from 'react';
import nyc from './nyc.png';
import Navbar from './Navbar.js'



import axios from 'axios';


class Header extends React.Component {
    render() {
      return(
        <div>
            <img src={nyc} alt="nyc logo" />
            <Navbar />
        </div>
      )
    }
  }

export default Header;