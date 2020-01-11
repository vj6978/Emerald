import React, {Component} from 'react'
import IssueCard from './IssueCard'
import './IssueList.css'

class IssueList extends Component 
{
    state = {
        issues: [
            {
                id: "1",
                issue: "Pi Broke",
                status: "inProgress"
            },
            {
                id: "2",
                issue: "Pi Broke",
                status: "open"
            },
            {
                id: "3",
                issue: "Pi Broke",
                status: "closed"
            },
            {
                id: "4",
                issue: "Pi Broke",
                status: "open"
            },
            {
                id: "5",
                issue: "Pi Broke",
                status: "closed"
            },
            
        ]
    }

    componentDidMount = () => {
        // Make API call for Issue List
    }

    render()
    {
        let issueList = this.state.issues.length === 0 ? <div className="card"><h4>Nothing to show!</h4></div> : this.state.issues.map(issueItem => 
            <IssueCard issue={issueItem} key={issueItem.id}></IssueCard>)

        return(
            <div>
                <div className="card">
                    <h3 className="issueHeader">Issues Log</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Issue</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {issueList}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default IssueList