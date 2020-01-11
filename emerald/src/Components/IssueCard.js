import React, { Component } from 'react'
import {Link} from 'react-router-dom'
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
                    <td><Link to={"/elaborate/" + this.props.issue.id}>{this.props.issue.issue}</Link></td>
                    <td><button className="btn {statusButtonColor}" onClick={this.statusUpdate}>{this.props.issue.status}</button></td>
                </tr>
            </React.Fragment>
        );
    }
}

export default IssueCard