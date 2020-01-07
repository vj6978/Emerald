import React, {Component} from 'react'
import Timeline from './Timeline'
import TimelineImage from './TimelineImage'
import NewPost from './NewPost'
import './Dashboard.css'

class Dashboard extends Component
{
    render()
    {
        return(
            <div className="row">
                <div className="image-container">
                    <TimelineImage></TimelineImage>
                </div>
                <div className="timeline-container">
                    <div className="issues-header">
                        <a href="/issues" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Issues History</a>
                    </div>
                    <NewPost></NewPost>
                    <Timeline></Timeline>
                </div>
            </div>
        )
    }
}

export default Dashboard