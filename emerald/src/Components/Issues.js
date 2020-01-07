import React, {Component} from 'react'
import TimelineImage from './TimelineImage'
import IssueList from './IssueList'
import './Issues.css'

class Issues extends Component
{
    state = {
        newPost: ""
    }

    render()
    {
        return(
            <div className="row">
                <div className="image-container">
                    <TimelineImage></TimelineImage>
                </div>
                <div className="timeline-container">
                    <IssueList></IssueList>
                </div>
            </div>
        )
    }
}

export default Issues