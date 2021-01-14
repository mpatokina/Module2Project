import React from 'react';




import axios from 'axios';


class Aboutps extends React.Component {
    render() {
      return(
        <div>
            <button onClick={(e) => (window.location = 'https://perscholas.org/')}>Click here to be redirected to Per Scholas web site!</button>
        </div>
      )
    }
  }

export default Aboutps;