import React from 'react';




import axios from 'axios';


class Aboutps extends React.Component {
    render() {
      return(
        <div>
            <h2>About Per Scholas</h2>
            <p>Please click on the button below to learn about Per Scholas.</p>
            <button onClick={(e) => (window.location = 'https://perscholas.org/')}>Click here to be redirected to Per Scholas web site!</button>
        </div>
      )
    }
  }

export default Aboutps;