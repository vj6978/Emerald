import React, {Component} from 'react'
import NothingToShowHere from './NothingToShowHere'
import SharedFileCard from './SharedFileCard'
import './SharedFilesTable.css'

class SharedFilesTable extends Component
{
    state = {
        sharedFiles: [
            {
                id: "1",
                sharedBy: "Pi Broke",
                sharedOn: "inProgress"
            },
            {
                id: "2",
                sharedBy: "Pi Broke",
                sharedOn: "open"
            },
            {
                id: "3",
                sharedBy: "Pi Broke",
                sharedOn: "closed"
            },
            {
                id: "4",
                sharedBy: "Pi Broke",
                sharedOn: "open"
            }]
    }

    render()
    {
        let sharedFilesContainer = this.state.sharedFiles.length === 0 ? <NothingToShowHere /> : this.state.sharedFiles.map(fileItem => 
            <SharedFileCard file={fileItem} key={fileItem.id}></SharedFileCard>)
            
        return(
            <div>
                <div className="card">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">File</th>
                                <th scope="col">Shared By</th>
                                <th scope="col">Shared On</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sharedFilesContainer}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default SharedFilesTable