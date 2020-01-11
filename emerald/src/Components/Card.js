import React, {Component} from 'react'
import './Card.css'
import CommentSection from './CommentSection'

class Card extends Component
{
    state =  {
        commentSectionExpanded: false,
    }

    handleDelete = (id) => {
        //DELETE post API call
        event.preventDefault()

    }

    expandComments = () => {
        this.setState({
            commentSectionExpanded: !this.state.commentSectionExpanded
        })
    }

    render()
    {
        let commentSectiondiv = (this.state.commentSectionExpanded) &&  <div className="commentSection"> <CommentSection></CommentSection> </div>

        return(
            <div>
                <div className="card">
                    <div className="card-header">
                        <h4>{this.props.author},  <small>{this.props.date}</small></h4> 
                    </div>
                    <div className="card-body">
                        {this.props.body}
                    </div>
                    <div className="card-footer">
                        {
                            this.props.author === this.props.loggedInAs &&
                                <button type="button" className="btn btn-danger" onClick={() => this.handleDelete(this.props.id)}>Delete</button>
                        }
                        
                        <button type="button" className="btn btn-info" onClick={this.expandComments}>Comment</button>
                     </div>
                    {commentSectiondiv}
                </div>
            </div>
        );
    }
} 

export default Card