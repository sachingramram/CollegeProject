import React from "react";
import "./MainHeader.css";
const MainHeader=(props)=>{
    return <header className="Mainheader">{props.children}</header>;
};

export default MainHeader;