import React from 'react';
import pipelineData from '../data/pipelineStartupFactory';


export default class Stages extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            currentPipeline:''
        }
    }

    render(){
        console.log('stages prop', this.props)
        // const {currentPipeline} = this.props;
        let liPipeline ={
            display: 'inline-block',
            paddingLeft: '30%',
            fontSize: '25px'
        };

        let liPipelineName ={
            display: 'inline-block',
            paddingLeft: '30%',
            fontSize: '25px'
        };

        let liPipelineTotalAmount ={
            display: 'inline-block',
            paddingRight: '30%',
            float: 'right',
            fontSize: '25px'
        };

        let liPipelineNumberOfDeals ={
            display: 'inline-block',
            paddingRight: '30%',
            float: 'right',
            fontSize: '25px'
        };

        const result = pipelineData.filter(pipeline => pipeline._id === this.props.currentPipeline._id)
        let currentPipeline = null;
        if(result[0] !== undefined){
            currentPipeline = result[0]
        }
        if(currentPipeline === null){
            return(
                <h3> No startup selected</h3>
            )
        }else{
                return (
                    <div style={liPipeline}>
                        <h3>{currentPipeline.pipeline}</h3>

                        { currentPipeline.stages.map(stage => { 
                                return (
                                    <ul>
                                    <li style={liPipelineName}>{stage.name}</li>
                                    <li style={liPipelineTotalAmount}>{stage.totalAmount}</li>
                                    <li style={liPipelineNumberOfDeals}>{stage.numberOfDeals}</li>
                                    </ul>) })
                        }
                    </div>
                )
        }
    }
}

