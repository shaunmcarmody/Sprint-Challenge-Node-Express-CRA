import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
                <div key={project.id}>
                    <Link to={`${project.id}/`}
                    >
                        {project.name}
                    </Link>
                </div> 
            ))
        }
      </div>
    );
  }
}

export default Projects;
