import React from 'react';
import "./card.css"

export default function Card (props){
    let {title, number} = props
    return (
        <div className="card bg-white cardWidth cardShadow" >
            <div className="card-body d-flex flex-row align-items-center">
                <div className="media-body d-flex flex-column justify-content-around">
                    <h6>{title}</h6>
                    <h3>{number}</h3>
                </div>
                <img src="http://placehold.it/64x64" className="rounded-circle"></img>
            </div>
        </div> 
    );
}