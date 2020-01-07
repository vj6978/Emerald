import React, {Component} from 'react'
import './IssueCard.css'

class IssueCard extends Component
{
    state = {

    }

    render() 
    {
        return(
            <div className="issueCard">
                <div className="card">
                    <table className="table">
                        <thead>
                            <th scope="col">ID</th>
                            <th scope="col">Issue</th>
                            <th scope="col">Resolution</th>
                            <th scope="col">Reported On</th>
                            <th scope="col">Resolved On</th>
                            <th scope="col">Comments</th>
                            <th scope="col">Status</th>
                        </thead>
                        <tbody>
                            <th scope="row">{props.ID}</th>
                            <td>{props.issue}</td>
                            <td>{props.resolution}</td>
                            <td>{props.reportedOn}</td>
                            <td>{props.resolvedOn}</td>
                            <td>{props.comments}</td>
                            <td>{props.status}</td>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default IssueCard