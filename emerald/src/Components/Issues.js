import React, {Component} from 'react'
import TimelineImage from './TimelineImage'
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
                    Issue List
                </div>
            </div>
        )
    }
}

export default Issues