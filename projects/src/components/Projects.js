import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Div = styled.div`
    border: 1px solid black;
    margin: auto;
    margin-top: 20px;
    padding: 10px;
    width: 500px;
`

class Projects extends Component {
  state = {
    projects: [],
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/projects/')
      .then(res => {
        this.setState({ projects: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        {
            this.state.projects.map(project => (
                <Div key={project.id}>
                    <Link to={`${project.id}/`}
                    >
                        {project.name}
                    </Link>
                </Div> 
            ))
        }
      </div>
    );
  }
}

export default Projects;
