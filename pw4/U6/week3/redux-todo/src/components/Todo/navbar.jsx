import React from "react";
import { Link} from "react-router-dom";
import styled from "styled-components";
import { Home } from "./Home";
import { TodoInput } from "./ListPage";

const NavbarWrapper=styled.div`
    background-color:orange;
    display:flex;
    justify-content:center;
    gap:50px;
    
    `;

const Navbar=()=>{
    
    return(
        <NavbarWrapper>
         <Link to="/">Home</Link>
         <Link to="/ListPage">List page</Link>
         <Route path="/ListPage/:id"  element={<TodoDetails />}> </Route>
        </NavbarWrapper>
    )
}
export default Navbar;