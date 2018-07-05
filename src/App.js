import React from 'react';
import MenuBar from './components/MenuBar';
import SideBar from './components/SideBar';
import MainSection from './components/MainSection';
import startups from './data/startupsStartupFactory';

import styles from './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedStartup: '',
    };
  }

  handleSelectedStartup = id => {
    this.setState({selectedStartup: id});
    console.log(id);
  }

  render() {
    const { selectedStartup } = this.state
    console.log('this.state', selectedStartup);

    return (
      <div className="App">
        <MenuBar currentUser="Marta" />
        <div className={styles.row}>
          <SideBar startups={startups}  handleSelectedStartup={this.handleSelectedStartup}/>
          <MainSection startupId={selectedStartup} />
        </div>
      </div>
    );
  }
}

export default App;
