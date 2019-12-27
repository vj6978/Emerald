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
                    <NewPost></NewPost>
                    <Timeline></Timeline>
                </div>
            </div>
        )
    }
}

export default Dashboard