import React from 'react';
import pipelineData from '../data/pipelineStartupFactory';
import startups from '../data/startupsStartupFactory';
import Stages from './Stages';
import PipelineSummary from './PipelineSummary';
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
        if (pipe != null) {
            this.setState({currentPipelineId: pipe._id});
        }
        if(this.state.debug){
            console.log('Selected pipeline', this.state.currentPipeline);
            console.log('Selected pipeline id', this.state.currentPipelineId);
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
                            {pipelineData.filter(pipe => pipe.startup === currentStartup.name)
                                .map(pipe => {
                                    return (
                                        <GridColumn key={pipe._id} onClick={() => this.handlePipelineSelection(pipe)}>
                                            <h3>{pipe.pipeline}</h3>
                                        </GridColumn>
                                    )}
                                )
                            }    
                        </GridRow>
                    </Grid>
                    <PipelineSummary selectedPipelineId={this.state.currentPipelineId} />
                </Container>
            )
        }
    }
}