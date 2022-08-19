import React from "react";
import styled from "styled-components"
import {Link} from "react-router-dom"

const NavbarWrapper= styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:30px;
background-color: orange;
padding:20px;
color:white;
`
const Navbar =()=>{
    return (
    <NavbarWrapper>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/products"> Products</Link>
        
    </NavbarWrapper>

    )
}

export default Navbar;