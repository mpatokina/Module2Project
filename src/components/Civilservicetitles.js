import React from 'react';



import axios from 'axios';

const TITLES_URL = 'https://data.cityofnewyork.us/resource/nzjr-3966.json'
class Titles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async getEmployees() {
        try {
          const res = await axios.get(TITLES_URL);
          this.setState({ employees: res.data });
        } catch(e) {
          console.error(e);
        }
      }
      componentDidMount() {
        this.getEmployees();
      }
    render() {
      return(
        <div className="employees">
            <h2>NYC Civil Service Titles</h2>
          <ol>
            { 
            this.state.employees && this.state.employees.map(employee => (
            <li key={ employee.id }>
              Title: { employee.title } |  Description: { employee.descr } |  Salary Min: ${ employee.min_rate } | Salary Max: ${ employee.max_rate } <hr></hr>
                
              </li>
              ))      
            }
          </ol>
        </div>
      )
    }
  }

export default Titles;