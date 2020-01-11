import React, {Component} from 'react'
import './Elaborate.css'

class Elaborate extends Component 
{
    state = {
        issue: 
            {
                id: "1",
                issue: "Pi Broke",
                resolution: "Fixed it",
                reportedOn: "10/10/10",
                resolvedOn: "20/22/22",
                comments: "Vimal JAmes",
                status: "inProgress"
            }
        
    }

    render()
    {
        return(
            <div className="card">
               <div className="card-body">
                   <div className="d-flex bd-highlight">
                       <div className="p-2 bd-highlight">
                            {this.state.issue.id}
                       </div>    
                   </div>
                   <div className="d-flex bd-highlight">
                        <div className="p-2 bd-highlight">
                            {this.state.issue.reportedOn}
                        </div>
                   </div>
                   <div className="d-flex bd-highlight">
                        <div className="p-2 bd-highlight">
                            {this.state.issue.resolvedOn}
                        </div>
                   </div>
                   <div className="d-flex bd-highlight">
                        <div className="p-2 bd-highlight">
                            {this.state.issue.issue}
                        </div>
                   </div>
                   <div className="d-flex bd-highlight">
                        <div className="p-2 bd-highlight">
                            {this.state.issue.resolution}
                        </div>
                   </div>
                   <div className="d-flex bd-highlight">
                        <div className="p-2 bd-highlight">
                            {this.state.issue.comments}
                        </div>
                   </div>
                   <div className="d-flex bd-highlight">
                        <div className="p-2 bd-highlight">
                            {this.state.issue.status}
                        </div>
                   </div>     
                </div>
            </div>
        );
    }
}

export default Elaborate