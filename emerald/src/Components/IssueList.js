import React, {Component} from 'react'
import IssueCard from './IssueCard'
import './IssueList.css'

class IssueList extends Component 
{
    state = {
        issues: []
    }

    componentDidMount = () => {
        // Make API call for Issue List
    }

    render()
    {
        return(
            <div>
                {
                    this.state.issues.length === 0 ? <div className="card"><h4>Nothing to show!</h4></div> : this.state.issues.map(issue =>
                        <div>
                            <IssueCard  issue={issue}></IssueCard> 
                        </div>
                    )
                }
            </div>
        );
    }
}

export default IssueList