import React, {Component} from 'react'
import Card from './Card'

class Timeline extends Component
{
    state = {
        author: "Vimal"
    }

    componentDidMount = () => {
        localStorage.setItem("userName", "Vimal")
    }

    render()
    {
        return(
            <div>
                <Card author={this.state.author} date="date1" body="Card Body"></Card>
                <Card author="Joseph" date="date1" body="Card Body"></Card>
                <Card author="James" date="date1" body="Card Body"></Card>
                <Card author={this.state.author} date="date1" body="Card Body"></Card>
                <Card author={this.state.author} date="date1" body="Card Body"></Card>
                <Card author="Joseph" date="date1" body="Card Body"></Card>
                <Card author="James" date="date1" body="Card Body"></Card>
                <Card author={this.state.author} date="date1" body="Card Body"></Card>
                <Card author={this.state.author} date="date1" body="Card Body"></Card>
                <Card author="Joseph" date="date1" body="Card Body"></Card>
                <Card author="James" date="date1" body="Card Body"></Card>
                <Card author={this.state.author} date="date1" body="Card Body"></Card>
                <Card author={this.state.author} date="date1" body="Card Body"></Card>
                <Card author="Joseph" date="date1" body="Card Body"></Card>
                <Card author="James" date="date1" body="Card Body"></Card>
                <Card author={this.state.author} date="date1" body="Card Body"></Card>
                <Card author={this.state.author} date="date1" body="Card Body"></Card>
                <Card author="Joseph" date="date1" body="Card Body"></Card>
                <Card author="James" date="date1" body="Card Body"></Card>
                <Card author={this.state.author} date="date1" body="Card Body"></Card>
                <Card author={this.state.author} date="date1" body="Card Body"></Card>
                <Card author="Joseph" date="date1" body="Card Body"></Card>
                <Card author="James" date="date1" body="Card Body"></Card>
                <Card author={this.state.author} date="date1" body="Card Body"></Card>
                <Card author={this.state.author} date="date1" body="Card Body"></Card>
                <Card author="Joseph" date="date1" body="Card Body"></Card>
                <Card author="James" date="date1" body="Card Body"></Card>
                <Card author={this.state.author} date="date1" body="Card Body"></Card>
            </div>
        )
    }
}

export default Timeline