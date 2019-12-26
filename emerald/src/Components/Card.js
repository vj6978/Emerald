import React, {Component} from 'react'
import './Card.css'

class Card extends Component
{
    state =  {
    }

    handleDelete = (id) => {
        //DELETE post API call
        event.preventDefault()

    }

    render()
    {
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
                     </div>
                </div>
            </div>
        );
    }
} 

export default Card