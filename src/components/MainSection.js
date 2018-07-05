import React from 'react';
import pipelineData from '../data/pipelineStartupFactory';
import startups from '../data/startupsStartupFactory';
import Stages from './Stages';

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
    
        let navPipeline = {
            margin: 0,
            overflow: 'hidden',
            borderStyle: 'groove'
          };

        let liPipeline ={
            display: 'inline-block',
            paddingLeft: '30%',
            fontSize: '25px'
        }
       
        const result = startups.filter(startup => startup._id === this.props.startupId)
        let currentStartup = null;
        if (result[0] !== undefined){
            currentStartup = result[0]
        }

        if (currentStartup === null){
            return (
                <h3> No startup selected</h3>
            )
        }else{
            return (
                <div>
                    <ul style={navPipeline}>
                        {pipelineData.filter(pipe => pipe.startup === currentStartup.name).map(pipe => {
                            return (
                                <div style={liPipeline} key={pipe._id} onClick={() => this.handlePipelineSelection(pipe)}>
                                    <h3>{pipe.pipeline}</h3>
                                </div>
                            )
                        })}
                    </ul>
                    {!!this.state.currentPipeline &&
                        <Stages currentPipeline={this.state.currentPipeline}/>
                    }  
                </div>
            )
        }
    }
}