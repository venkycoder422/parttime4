import React from "react";
import styled from "styled-components"
import {Link} from "react-router-dom"

const NavbarWrapper= styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:20px;
background-color: orange;
`
const Navbar =()=>{
    return (
    <NavbarWrapper>
        <Link to="/">HOME</Link>
        <Link to="/">ABOUT</Link>
        <Link to="/">CONTACT Us</Link>
        <Link to="/">Login</Link>
    </NavbarWrapper>

    )
}

export default Navbar;