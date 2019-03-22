// import React from 'react';

// const Project = props => <div>Project</div>

// export default Project;

import React from 'react';
import axios from 'axios';

class Project extends React.Component {
    state = {
        name: '',
        description: '',
        completed: null,
        actions: []
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios
            .get(`http://localhost:5000/api/projects/${id}/`)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    description: res.data.description,
                    completed: res.data.completed,
                    actions: res.data.actions
                });
            })
            .catch(err => {
              console.log(err);
            });
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h2>{this.state.description}</h2>
                <p>{`${this.state.completed}`}</p>
                {
                    this.state.actions.map(action => (
                        <div key={action.id}>
                            <h3>{action.description}</h3>
                            <p>{action.notes}</p>
                            <p>{`${action.completed}`}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Project;