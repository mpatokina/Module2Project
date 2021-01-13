import React from 'react';



import axios from 'axios';

const CIVILSERVICELIST_URL = 'https://data.cityofnewyork.us/resource/vx8i-nprf.json'
class Civilservice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async getCandidates() {
        try {
          const res = await axios.get(CIVILSERVICELIST_URL);
          this.setState({ candidates: res.data });
        } catch(e) {
          console.error(e);
        }
      }
      componentDidMount() {
        this.getCandidates();
      }
    render() {
      return(
        <div className="candidates">
          <ol>
            { 
            this.state.candidates && this.state.candidates.map(candidate => (
            <li key={ candidate.id }>
              Exam number: { candidate.exam_no } |  First name: { candidate.first_name } |  Last name: { candidate.last_name } |  Title: { candidate.list_title_desc } <hr></hr>
                
              </li>
              ))      
            }
          </ol>
        </div>
      )
    }
  }

export default Civilservice;