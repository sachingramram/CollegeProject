import React from "react";
import UserItem from "./UserItem";
import "./UsersList.css";

const UserList=(props)=>{
 return (
    <ul className="userlist">
        {props.items.map((user)=>{
            return(
               < UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            pic={user.pic}
            locationcount={user.numberoflocations}
            />
            );
        })}
    </ul>
 )
};


export default UserList;