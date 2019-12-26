import React, { useEffect } from 'react'
import './Card.css'

export default function Card(props)
{
    const userName = localStorage.getItem("userName")
    let deleteButton;

    useEffect(() =>
    {
        userName[0] === props.author ? deleteButton = <button type="button" className="btn btn-danger">Delete</button> : deleteButton = null
    });

    return(
        <div>
            <div className="card">
                <div className="card-header">
                    <h4>{props.author}, <small>{props.date}</small></h4> 
                </div>
                <div className="card-body">
                    {props.body}
                </div>
                <div className="card-footer">
                    {deleteButton}
                </div>
            </div>
        </div>
    );
} 