import React from 'react';
import nyc from './nyc.png';



import axios from 'axios';


class Header extends React.Component {
    render() {
      return(<div>
        <h1>Header</h1>
        <img src={nyc} alt="nyc logo" />
        </div>
      )
    }
  }

export default Header;