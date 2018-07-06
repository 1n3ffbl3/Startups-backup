import React from 'react';
import pipelineData from '../data/pipelineStartupFactory';


export default class Stages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPipeline: ''
        }
    }

    render() {
        console.log('stages prop', this.props)

        const result = pipelineData.filter(pipeline => pipeline._id === this.props.currentPipeline._id)
        let currentPipeline = null;
        if (result[0] !== undefined) {
            currentPipeline = result[0]
        }
        if (currentPipeline === null) {
            return (
                <h3> No startup selected</h3>
            )
        } else {
            return (
                <div>
                    {currentPipeline.stages.map(stage => {
                        return (
                            <ul>
                                <li>{stage.name}</li>
                                <li>{stage.totalAmount}</li>
                                <li>{stage.numberOfDeals}</li>
                            </ul>)
                    })
                    }
                </div>
            )
        }
    }
}

