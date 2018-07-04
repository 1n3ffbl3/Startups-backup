import React from 'react';
import PipelineData from './PipelineData';

export default class Main extends React.Component {
    constructor() {
        super();

        this.state ={
            visible: false,
            pipelineData: '',
            currentPipelineId:'',
            debug: true
        }
    }
     toggle(value){
        console.log("toggle() fired with value: ", value);
        this.setState({
            visible: !this.state.visible,
             pipelineData: value
         })
     }

    handlePipelineSelection = id => {
        this.setState({currentPipelineId: id});
        if(this.state.debug){
            console.log(this.state.currentPipelineId);
        }
    }

    render(){
        const {pipelineData} = this.props;
        const {currentPipelineId} = this.state
        return(
            <div>
                <ul>
                    {pipelineData.map(pipe => {
                        return (
                            <div key={pipe._id} onClick={() => this.handlePipelineSelection(pipe._id)}>
                                <h3 >{pipe.pipeline}</h3>
                            </div>
                        )
                    })}
                </ul>
                <PipelineData currentPipelineId={currentPipelineId}/>
            </div>
        )
    }
}