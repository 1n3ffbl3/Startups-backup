import React from 'react';

export default class Stages extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <ul>
                    {pipelineData.map(pipe => {
                        return (
                            <div key={pipe.stages.stageId}
                                onClick={() => console.log(pipe.stages.stageId)}>
                            </div>
                        )
                    }
                    )}
                </ul>
            </div>
        )
    }
}