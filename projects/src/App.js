import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Projects from './components/Projects';
import Project from './components/Project';

const App = () => (
  <div className="App">
    <Route exact path="/" component={Projects} />
    <Route exact path={`/:id/`} component={props => <Project {...props} /> } />
  </div>
)

export default App;