import React from 'react';
import pipelineData from '../data/pipelineStartupFactory';
import startups from '../data/startupsStartupFactory';
import Stages from './Stages';
import { Container, GridRow, GridColumn, Grid, Table } from 'semantic-ui-react';

export default class MainSection extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            visible: false,
            pipelineData: '',
            currentPipelineId:'',
            currentStartupId:'',
            currentStageId: '',
            targetStartupName: '',
            debug: true,
            currentPipeline: null
        }
    }
    toggle(value){
        console.log("toggle() fired with value: ", value);
        this.setState({
            visible: !this.state.visible,
             pipelineData: value
         })
     }

    handlePipelineSelection = pipe => {
        this.setState({currentPipeline: pipe});
        if(this.state.debug){
            console.log(this.state.currentPipeline);
        }
    }
    handelStartupSelection = id => {
        this.setState({currentStartupId: id});
        if(this.state.debug){
            console.log(this.state.currentStartupId);
        }
    }

    handelStagesSelection = id =>{
        this.setState({currentStageId: id});
        if(this.state.debug){
            console.log(this.state.currentStageId);
        }
    }

    render(){
        const result = startups.filter(startup => startup._id === this.props.startupId)
        let currentStartup = null;
        if (result[0] !== undefined){
            currentStartup = result[0]
        }

        if (currentStartup === null){
            return (
                <Container>
                    <h3> No startup selected</h3>
                </Container>
            )
        }else{
            return (
                <Container>
                    <Grid>
                        <GridRow>
                            <GridColumn width="2">
                                <h3>Pipelines:</h3>
                            </GridColumn>
                            {pipelineData.filter(pipe => pipe.startup === currentStartup.name).map(pipe => {
                                return (
                                    <GridColumn key={pipe._id} onClick={() => this.handlePipelineSelection(pipe)}>
                                        <h3>{pipe.pipeline}</h3>
                                    </GridColumn>
                                )
                            })}    
                        </GridRow>
                    </Grid>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Stages</Table.HeaderCell>
                                <Table.HeaderCell>Previous Week</Table.HeaderCell>
                                <Table.HeaderCell>Current Week</Table.HeaderCell>
                                <Table.HeaderCell>Delta</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        
                        <Table.Body>
                            { !!this.state.currentPipeline &&
                                pipelineData
                                    .filter(pipeline => pipeline._id === this.state.currentPipeline._id)[0]
                                    .stages.map(stage => {
                                        return (
                                            <Table.Row>
                                                <Table.Cell>{stage.name}</Table.Cell>
                                            </Table.Row>
                                        )
                                    })
                            }
                        </Table.Body>
                    </Table>
                    {/* {!!this.state.currentPipeline &&
                        <Stages currentPipeline={this.state.currentPipeline}/>
                    }   */}
                </Container>
            )
        }
    }
}