import React, {Component} from 'react'
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
            <div>
                <IssueList></IssueList>
            </div>
        )
    }
}

export default Issues