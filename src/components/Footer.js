import React from 'react';
import skyline from './skyline.png';



import axios from 'axios';


class Footer extends React.Component {
    render() {
      return(
      <div>
          <img src={ skyline } alt="nyc skyline" />
      </div>
      )
    }
  }

export default Footer;