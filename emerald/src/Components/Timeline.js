import React, {Component} from 'react'
import Card from './Card'
import SplitPane, { Pane } from 'react-split-pane';

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
                <SplitPane split="vertical">
                    <Pane maxSize="30px">
                        <img src="https://images.unsplash.com/photo-1577154882377-bdb09a7d9d43" alt="Emerald"></img>
                    </Pane>

                    <Pane maxSize="70px">
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
                    </Pane>
                </SplitPane>
            </div>
        )
    }
}

export default Timeline