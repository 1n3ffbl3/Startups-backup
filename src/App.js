import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Aside from './components/Aside';
import startups from './data/startupsStartupFactory';
import Main from './components/Main';
import pipelineData from './data/pipelineStartupFactory';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar currentUser="Marta" />
        <Aside startups={startups}/>
        <Main pipelineData={pipelineData} />
      
      </div>
    );
  }
}

export default App;
