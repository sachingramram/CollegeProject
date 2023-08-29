import React from "react";
import {Link} from "react-router-dom";
import "./UsersItem.css";

const UserList=(props)=>{
    return(
        <li className="useritem">
            <div className="useritem-content">
                <Link to=""></Link>
                <div className="useritem-pic">
                    <img src={props.pic} alt={props.name}/>
                </div>
                <div className="useritem-infor">
                    <h2>{props.name}</h2>
                    <h3>{prop.locationcount}
                    {props.location===1 ? "location":"locarions"}
                    </h3>
                </div>
            </div>
        </li>
    )
}

export default UserItem;