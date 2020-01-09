import React, {Component} from 'react'
import './CommentPane.css'

class CommentPane extends Component
{
    state = {
        comments: [
            {
                id: "1",
                author: "Vimal",
                date: "1-2-18",
                body: "This is a good solution (Y)"
            },
            {
                id: "2",
                author: "Joseph",
                date: "1-4-16",
                body: "I doubt this would work but I guess we could give it a shot. Nonetheless I think it would make sense for us to have a fallback strategy/option."
            }]
    }

    render()
    {        
        return(
            <div className="commentBlock">     
                {
                    this.state.comments.map(comment => 
                                        <div className="comment" key={comment.id}>
                                            <small><b>{comment.author}&nbsp;{comment.date}</b></small>
                                            <div>
                                                {comment.body}
                                            </div>
                                            <hr />
                                        </div>)
                }
            </div>
        );
    }
}

export default CommentPane