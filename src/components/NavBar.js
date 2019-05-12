import React from "react";
import fonts from "../styles/fonts";

import { NavLink } from "react-router-dom";

const links = ["pilots","ecurie"];

const NavBar =  () => {
    return(
        <nav style={navMain}>
         {links.map((link, id)=>{
            return (
                <NavLink
                key={id}
                to={`/${link}`}
                style={basicStyle}
                activeStyle={activeStyle}
                >
                {link}
                </NavLink>
            )
        })}
        </nav>
    )
}

const navMain = {
    margin: "12px 24px"
}
const basicStyle = {
    fontWeight: "bold",
    color: "green",
    fontFamily: fonts.bold
}

const activeStyle = {
    fontWeight: "bold",
    color: "red"
}

export default NavBar;