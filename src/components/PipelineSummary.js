import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

import pipelineData from '../data/pipelineStartupFactory';

class PipelineSummary extends Component {
    constructor() {
        super();
    }

    render() {
        const {selectedPipelineId} = this.props;
        console.log(this.props);
        console.log(selectedPipelineId);
        const result = pipelineData.filter(pipeline => pipeline._id === selectedPipelineId);
        let currentPipeline = null;
        if (result[0] !== undefined) {
            currentPipeline = result[0]
        }

        if (currentPipeline == null) {
            return (
                <h3>No pipeline selected</h3>
            )
        } else {
            return (
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width="3">Stages</Table.HeaderCell>
                            <Table.HeaderCell width="3">Previous Week</Table.HeaderCell>
                            <Table.HeaderCell width="3">Current Week</Table.HeaderCell>
                            <Table.HeaderCell width="3">Delta</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            currentPipeline.stages.map(stage => {
                                return (
                                    <Table.Row>
                                        <Table.Cell>{stage.name}</Table.Cell>
                                        <Table.Cell>{"total amount: " + stage.totalAmount + " | no. deals: " + stage.numberOfDeals}</Table.Cell>
                                        <Table.Cell>{"total amount: " + stage.totalAmount + " | no. deals: " + stage.numberOfDeals}</Table.Cell>
                                        <Table.Cell>delta</Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
                    </Table.Body>
                </Table>
            )
        }
    }
}

export default PipelineSummary;