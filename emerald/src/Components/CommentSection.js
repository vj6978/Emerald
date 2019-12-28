import React, {Component} from 'react'
import NewPost from './NewPost'
import CommentPane from './CommentPane'

class CommentSection extends Component
{
    state = {

    }

    render()
    {
        return(
            <div>
                <CommentPane></CommentPane>
                <NewPost></NewPost>
            </div>
        );
    }
    
}

export default CommentSection