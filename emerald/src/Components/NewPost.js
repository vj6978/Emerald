import React, {Component} from 'react'

class NewPost extends Component
{
    state = {
        newPost: ""
    }

    handleInput = (event) => {
        this.setState({
            newPost: [event.target.value]
        })
    }

    handleFormSubmit = (event) => {
        //Make Post API CALL. Post to server this.state.newPost
        event.preventDefault()
    }

    render()
    {
        return(
            <div className="card">
                <div className="card-body">
                    <div className="newPostInput">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" id="newPost" placeholder="Start typing ... " onChange={this.handleInput}/>
                            </div>
        
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewPost