import React from 'react';




import axios from 'axios';


class About extends React.Component {
    render() {
      return(
        <div>
            <h2>About this project</h2>
            <p>This is Module 2 Project for Per Scholas Software Engineering class.</p>
            <p>I used APIs from NYC Open Data web site to get information that would be useful for people who are inerested in employment with city agencies.</p>
            <p>In the Civil Service Titles Section you can get information about different Titles and the min and max pay for the Titles.</p>
            <p>A Civil Service List includes the names of eligible candidates on an Active Civil Service List that has been established.</p>
            <p>Citywide Payroll Data section shows how the City’s budget is being spent on salary for all municipal employees.</p>
            <p>To get more information from NYC Open Data web site you can click on the button below.</p>
            <button onClick={(e) => (window.location = 'https://opendata.cityofnewyork.us/data/')}>Click here to be redirected to NYC Open Data web site!</button>
        </div>
      )
    }
  }

export default About;