import React, { Component } from 'react'
import './IssueCard.css'

class IssueCard extends Component
{
    state = {

    }

    statusUpdate = (event) => {
        
    }

    render()
    {
        return(
            <React.Fragment>
                <tr>
                    <th scope="row">{this.props.issue.id}</th>
                    <td>{this.props.issue.issue}</td>
                    <td>{this.props.issue.resolution}</td>
                    <td>{this.props.issue.reportedOn}</td>
                    <td>{this.props.issue.resolvedOn}</td>
                    <td>{this.props.issue.comments}</td>
                    <td><button className="btn {statusButtonColor}" onClick={this.statusUpdate}>{this.props.issue.status}</button></td>
                </tr>
            </React.Fragment>
        );
    }
}

export default IssueCard