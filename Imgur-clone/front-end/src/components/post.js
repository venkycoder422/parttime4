import React from 'react'
import styled from "styled-components";



import { Link } from 'react-router-dom';


import ReactPlayer from 'react-player'


const Pin = (props) => {
    // console.log("ISV", props.id);
    // function Video(props) {


    //     if (props.isV) {
    //         console.log("img as",props.isV);
    //         return <img className="img" src={props.url} alt="pin"></img>
    //     }
    //     else {
    //         console.log("video as",props.isV);
    //         return <ReactPlayer className="img" url={props.url}  width="236px" height="360px" />

    //     }
    // }

    

    return (
        <Wrapper>
            <Container className='pin-container'>
                <div className='ImageWrapper'>
                    <div>

                        {/* <img className="img" src={props.url} alt="pin"></img> */}

                        {
                            props.isV ? <Link to={`/pin/${props.id}`}> <img className="img" src={props.url} alt="pin"></img></Link> : <ReactPlayer className="video" url={props.url} playing muted loop width="236px" height="360px" style={{ width: "100%", height: "100%", objectFit: "fill" }}></ReactPlayer>
                        }
                      
                    </div>
                   
                        
                    

                </div>

                <p>{props.title}</p>
            </Container>

        </Wrapper >


    )
}



const Wrapper = styled.div`
display:inline-flex;
z-index:1;
// padding:0px 6px 16px;
`;

const Container = styled.div`
display:flex;
align-items: center;
flex-direction:column;
box-sizing:border-box;
cursor:pointer;
width:240px;
position:relative;

.ImageWrapper{
width:100%;
height:100%;
}
iframe{
    display:flex;
    width:100%;
    // border:1px solid yellow;
    object-fit:cover;
    border-radius:16px;
    cursor:zoom-in;
    overflow:hidden;
    autoplay:1;
    
}
.img{
    display:flex;
    width:100%;
    // border:1px solid yellow;
    object-fit:cover;
    
    cursor:zoom-in;
    overflow:display;
    // height:100%;
    // margin-left:-50px;
   
}

video{
    object-fit:fill;
}
.div1{
    display:flex;
    color:white;
    justify-content:space-between;
}

.div2{
    display:flex;
   
    flex-direction:row-reverse;
}

.IconsHideShow{
    display:none;
    width:240px;
    height:100%;
    
}

:hover img{
   
        filter: brightness(70%);
    
}


`;








export default Pin;