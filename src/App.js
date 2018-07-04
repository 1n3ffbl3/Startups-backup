import React, { Component } from 'react';
import MenuBar from './components/MenuBar';
import SideBar from './components/SideBar';
import startups from './data/startupsStartupFactory';
import Main from './components/Main';
import pipelineData from './data/pipelineStartupFactory';

import styles from './App.css';

class App extends Component {
  
  render() {
    const sideBarClasses = `${styles.column} ${styles.left}`;
    const mainClasses = `${styles.column} ${styles.right}`;
    return (
      <div className="App">
        <MenuBar currentUser="Marta" />
        <div className={styles.row}>
          <SideBar className={sideBarClasses} startups={startups} />
          <Main className={mainClasses} pipelineData={pipelineData} />
        </div>
      </div>
    );
  }
}

export default App;
