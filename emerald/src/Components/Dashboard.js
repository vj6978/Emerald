import React, {Component} from 'react'
import Timeline from './Timeline'
import TimelineImage from './TimelineImage'
import './Dashboard.css'

class Dashboard extends Component
{
    state = {

    }

    render()
    {
        return(
            <div className="row">
                <div className="image-container">
                    <TimelineImage></TimelineImage>
                </div>
                <div className="timeline-container">
                    <Timeline></Timeline>
                </div>
            </div>
        )
    }
}

export default Dashboard