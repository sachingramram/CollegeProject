import React from "react";
import {NavLink} from "react-router-dom";
import "./NavLinks.css";
const NavLinks=(props)=>{
    return (
        <ul className="navlinks">
            <li>
                <NavLink to ="/" exact>Everyone</NavLink>
            </li>
            <li>
                <NavLink to ="/u1/locations">My Locations</NavLink>
            </li>
            <li>
                <NavLink to ="/locations/new">Add Locations</NavLink>
            </li>
            <li>
                <NavLink to ="/login">Sign In/Up</NavLink>
            </li>
        </ul>
    )
};

export default NavLinks;