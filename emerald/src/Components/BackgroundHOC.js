import React, {Component} from 'react'
import TimelineImage from './TimelineImage'
import './BackgroundHOC.css'

const BackgroundHOC = (ComponentToWrap) => {
    return class WrappedComponent extends Component {
        state ={

        }

        render()
        {
            return(
                <div className="row">
                    <div className="image-container">
                        <TimelineImage></TimelineImage>
                    </div>
                    <div className="timeline-container">
                        <ComponentToWrap></ComponentToWrap>
                    </div>
                </div>
            );
        }
    }
}

export default BackgroundHOC