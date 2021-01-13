import React from 'react';
import skyline from './skyline.png';



import axios from 'axios';


class Footer extends React.Component {
    render() {
      return(<div>
        <h1>Footer</h1>
        <img src={ skyline } alt="nyc skyline" />
        </div>
      )
    }
  }

export default Footer;