import React from "react";
import {formulaFonts} from "../styles/fonts";

import { NavLink } from "react-router-dom";

const links = [
    {
        path: "/pilots",
        name: "pilotes"
    },
    {
        path: "/ecurie",
        name: "ecuries"
    }
]

const NavBar =  () => {
    return(
        <nav style={navMain}>
         {links.map((link, id)=>{
            return (
                <NavLink
                key={id}
                to={link.path}
                style={basicStyle}
                activeStyle={activeStyle}
                >
                {link.name}
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
    fontFamily: formulaFonts.bold,
    marginRight: "32px",
    textTransform: "Uppercase",
    color: "black",
    opacity: 0.5,
    listStyleType: "none",
    textDecoration: "none",
}

const activeStyle = {
    fontWeight: "bold",
    color: "red",
    opacity: 1
}

export default NavBar;