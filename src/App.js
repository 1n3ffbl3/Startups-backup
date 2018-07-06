import React from 'react';
import MenuBar from './components/MenuBar';
import SideBar from './components/SideBar';
import MainSection from './components/MainSection';
import startups from './data/startupsStartupFactory';
import { Container, Grid, GridColumn } from 'semantic-ui-react'

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
      <div>
        <MenuBar currentUser="Marta" />
        <Grid>
          <GridColumn width="3">
            <SideBar startups={startups}  handleSelectedStartup={this.handleSelectedStartup}/>
          </GridColumn>
          <GridColumn width="13">
            <MainSection startupId={selectedStartup} />
          </GridColumn>
        </Grid>
      </div>
    );
  }
}

export default App;
