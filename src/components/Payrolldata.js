import React from 'react';



import axios from 'axios';

const PAYROLLDATA_URL = 'https://data.cityofnewyork.us/resource/k397-673e.json'
class Payrolldata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async getEmployees() {
        try {
          const res = await axios.get(PAYROLLDATA_URL);
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
          <ol>
            { 
            this.state.employees && this.state.employees.map(employee => (
            <li key={ employee.id }>
              First name: { employee.first_name } |  Last name: { employee.last_name } |  Borough: { employee.work_location_borough } | Title: { employee.title_description } |  Salary: ${ employee.base_salary } <hr></hr>
                
              </li>
              ))      
            }
          </ol>
        </div>
      )
    }
  }

export default Payrolldata;