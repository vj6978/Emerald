import React from 'react'
import NewPost from './NewPost'
import CommentPane from './CommentPane'

function CommentSection()
{
    return(
        <div>
            <CommentPane></CommentPane>
            <NewPost></NewPost>
        </div>
    );    
}

export default CommentSection