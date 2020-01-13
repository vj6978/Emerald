import React from 'react'

const SharedFileCard = (props) =>
{
    return(
        <React.Fragment>
            <tr>
                <th scope="row">{props.file.id}</th>
                <td>{props.file.sharedBy}</td>
                <td>{props.file.sharedOn}</td>
            </tr>
        </React.Fragment>
    );
}

export default SharedFileCard