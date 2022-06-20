import React from "react";
import styled from "styled-components"
import {Link} from "react-router-dom"
import setCount from "./Products";


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
        <Link to="/cart">Cart-{}</Link>
        <Link to="/products"> Products</Link>
        <Link to="/login">Login</Link>
    </NavbarWrapper>

    )
}

export default Navbar;