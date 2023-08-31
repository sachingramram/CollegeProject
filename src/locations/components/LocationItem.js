import React from "react";
import "./LocationItem.css";
const LocationsItem=(props)=>{
    return <li className="locationitem">
        <div className="locationitem-content">
            <div className="locationitem-pic">
                <img src={props.pic} alt ={props.title}/>
            </div>
            
        </div>
    </li>

    
}