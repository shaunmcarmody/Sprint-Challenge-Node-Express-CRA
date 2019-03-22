import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Div = styled.div`
    border: 1px solid black;
    margin: auto;
    padding: 10px;
    width: 500px;
`

const Action = styled.div`
    border: 1px solid grey;
    margin: auto;
    margin-top: 20px;
    padding: 10px;
    width: 90%;
`

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
            <Div>
                <h1>{this.state.name}</h1>
                <h2>{this.state.description}</h2>
                <p>{`${this.state.completed}`}</p>
                {
                    this.state.actions.map(action => (
                        <Action key={action.id}>
                            <h3>{action.description}</h3>
                            <p>{action.notes}</p>
                            <p>{`${action.completed}`}</p>
                        </Action>
                    ))
                }
            </Div>
        )
    }
}

export default Project;