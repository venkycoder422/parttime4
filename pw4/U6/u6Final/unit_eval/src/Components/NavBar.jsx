import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components' ;
 const NavBar = () => {
    const NavBarWrap=styled.div`
    width:100%;
    height:50px;
    background-color:orange;
    display:flex;
    justify-content:space-between;
    
    `;
  return (
    <NavBarWrap>
        <Link to="/">HOME</Link>
        <Link to="/Bookings">BOOKINGS</Link>
        <Link to="/Login">Login</Link>
    </NavBarWrap>
  )
}

export {NavBar};