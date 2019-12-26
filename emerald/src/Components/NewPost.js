import React, {Component} from 'react'

class NewPost extends Component
{
    state = {

    }

    handleInput = (event) => {
        this.setState({
            newPost: [event.target.value]
        })
    }

    handleFormSubmit = (event) => {
        //Make Post API CALL
    }

    render()
    {
        return(
            <div className="newPostInput">
                <form>

                </form>
            </div>
        )
    }
}

export default NewPost