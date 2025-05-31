import React from "react";

function Header (props) {
    console.log('o/p', props);
    
    return <h1>{props.name} I am Header {props.age}</h1>
}


export default Header;
