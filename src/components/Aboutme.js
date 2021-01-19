import React from 'react';




import axios from 'axios';


class Aboutme extends React.Component {
    render() {
      return(
        <div>
            <h2>About me</h2>
            <p>My name is Maria Patokina.</p>
            <p>I am a Software Engineer student at Per Scholas.</p>
            <p>Email: mpatokina@gmail.com</p>
            <p>Github: https://github.com/mpatokina</p>
            <p>Click to the button below to get redirected to my github account.</p>
            <button onClick={(e) => (window.location = 'https://github.com/mpatokina/')}>Click here to be redirected to my github!</button>

        </div>
      )
    }
  }

export default Aboutme;