import React from 'react'
import styled from 'styled-components'
import logo from '../images/imgur-logo.png'
import {BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <Wrapper>
            <NavbarWrapper>
                <LeftPart>
                    <Logo>
                        <Link to={`/`}>
                        <img src={logo}></img>
                        </Link>
                    </Logo>
                    <CreateDiv>
                        <img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.13ab64f9f36ad8f25ae3544b350e2ae1.svg"></img>
                        <span>New Post</span>
                    </CreateDiv>
                </LeftPart>

                <SearchWrapper>
                    <form>
                        <input type="text" placeholder='Search'></input>
                        <button type="submit"><BsSearch /></button>
                    </form>
                </SearchWrapper>
                <LoginTab>
                    <p className='add-free'>Go add-Free</p>
                    <p className='SignIn'>Sign in</p>
                    <p className='SignUp'>Sign up</p>
                </LoginTab>
            </NavbarWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-image:url('https://s.imgur.com/desktop-assets/desktop-assets/homebg.e52b5cdf24f83bcd55f9f1318855f2ef.png');
    height:48px;
    width:100%;
    // border:5px solid yellow;
    display:flex;
    justify-items: center;
    position:fixed;
    z-index:2;
    top:0px;
    
  
   

   
`;
const NavbarWrapper = styled.div`
display:flex;
justify-content:space-between;
 margin:10px;
 width:100%;
 height:100%;

`;
const LeftPart = styled.div`
display: flex;
gap:10px;

`;
const Logo = styled.div`
img{
    width:94px;
    height:34px;
}`;
const CreateDiv = styled.button`

    text-align: center;
    height: 35px;
    display: inline-block;
    padding: 7px 14px 10px 9px;
    text-transform: none;
    user-select: none;
    touch-action: manipulation;
    border-radius: 3px;
    font-size: 15px;
    font-weight: 700;
    position: relative;
    width: auto;
    background-color: #1bb76e;
    box-shadow: 0 6px 10px 0 rgb(27 28 30 / 31%);
    color: #fff;
    white-space: nowrap;
img{
width:22px;
height:22px;
margin:0px 13px 0px 0px;
}
span{
    font-size: 15px;
    font-weight: 700;
    position: relative;
    top: -7px;
}




`;

const SearchWrapper = styled.div`

    form{
        display:flex;
    }
    form>input{
        background: hsla(0,0%,100%,.25);
        border: 1px solid transparent;
        padding: 8px 35px 8px 10px;
        border-radius: 3px;
        width: 550px;
        outline: 0 none;
        opacity: .8;
        
        font-size: 16px;
        font-weight: 700;
        letter-spacing: .4px;
        color: #fff;
        text-shadow: inherit;
        -webkit-text-fill-color: inherit;
    }
`;

const LoginTab = styled.div`
    display:flex;
    color:white;
    justify-content:space-between;
    gap:10px;
    height:36px;
    .add-free{
    background: #6432f9;
    box-shadow: 0 3px 4pxrgba(0,0,0,.12);
    padding: 0 10px 0 9px;
    overflow: hidden;
    margin: auto 0;
    line-height: 35px;
    border-radius:3px;
    font-size: 15px;
    font-weight: 700;
    margin-top:0px;
    };

    .SignIn{
        margin: auto 24px auto 8px;
        font-size: 15px;
        font-weight: 600;
        text-align: center;
        color: #fff;
        text-shadow: 0 14px 15px rgb(27 28 30 / 31%);
        white-space: nowrap;
        vertical-align: middle;
        border-radius:3px;
        margin-top:0px;
        // padding:5px 0px 0px 0px;
        line-height: 35px;
    };

    .SignUp{
        text-align: center;
        height: 16px;
        display: inline-block;
        padding: 7px 14px 13px 14px;
      
        text-transform: none;
        user-select: none;
        touch-action: manipulation;
        border-radius: 3px;
        font-size: 15px;
        font-weight: 700;
        width: auto;
        background-color: #1bb76e;
        box-shadow: 0 6px 10px 0rgba(27,28,30,.31);
        color: #fff;
        white-space: nowrap;
        margin-top:0px;
    }
`;


