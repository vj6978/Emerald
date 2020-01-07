import React from 'react'
import './IssueCard.css'

const IssueCard = (props) =>
{
    return(
        <React.Fragment>
            <tr>
                <th scope="row">{props.issue.id}</th>
                <td>{props.issue.issue}</td>
                <td>{props.issue.resolution}</td>
                <td>{props.issue.reportedOn}</td>
                <td>{props.issue.resolvedOn}</td>
                <td>{props.issue.comments}</td>
                <td>{props.issue.status}</td>
            </tr>
        </React.Fragment>
    );
}

export default IssueCard