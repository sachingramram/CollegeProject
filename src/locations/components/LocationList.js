import React from "react";
import LocationItem from "../components/LocationItem";
import "./LocationList.css";
const LocationList=(props)=>{
    if(props.item.length===0){

        return(
            <div className="">
                <h2>No Locations exists</h2>
            </div>
        );


    }
    return (
        <ul className ="locationslist">
            {props.items}
        </ul>
    )
}
export default LocationList;