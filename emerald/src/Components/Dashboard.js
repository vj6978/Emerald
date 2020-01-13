import React, {Component} from 'react'
import Timeline from './Timeline'
import NewPost from './NewPost'
import './Dashboard.css'

class Dashboard extends Component
{
    render()
    {
        return(
            <div>
                <div className="issues-header">
                    <a href="/issues" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Issues History</a>
                </div>
                <NewPost></NewPost>
                <Timeline></Timeline>
            </div>
        )
    }
}

export default Dashboard