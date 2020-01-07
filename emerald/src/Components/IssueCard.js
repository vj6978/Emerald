import React, { useCallback, useEffect, useState } from 'react'
import './IssueCard.css'

const IssueCard = (props) =>
{
    const [status, setStatus] = useState("inProgress")

    useEffect(() => {
        setStatus(props.issue.status)
    })

    const statusUpdate = useCallback(() => {
        alert("Ibnsider")
    })

    return(
        <React.Fragment>
            <tr>
                <th scope="row">{props.issue.id}</th>
                <td>{props.issue.issue}</td>
                <td>{props.issue.resolution}</td>
                <td>{props.issue.reportedOn}</td>
                <td>{props.issue.resolvedOn}</td>
                <td>{props.issue.comments}</td>
                <td><button className="btn {statusButtonColor}" onClick={statusUpdate}>{props.issue.status}</button></td>
            </tr>
        </React.Fragment>
    );
}

export default IssueCard