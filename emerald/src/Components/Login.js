import React, {Component} from 'react'
import './Login.css'

class Login extends Component 
{
    state = {

    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        // Handle User Login Here
    }

    render()
    {
        return(
            <div className="login-component">
                <div className="card">
                    <img className="card-img-top" src="https://picsum.photos/id/237/200/300" alt="Login" />
                    <div className="card-body">
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Username"></input>
                            <input className="form-control" type="password" placeholder="Password"></input>
                            <button className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Login