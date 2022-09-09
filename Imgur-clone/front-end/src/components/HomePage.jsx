import React from 'react'
import styled from 'styled-components';
import Pin from './post';
export const HomePage = (props) => {
  let { pins } = props;
  console.log(pins)
  return (
    <HomeWrapper>
      <Container>
        {

          pins?.map((data, index) => {
            let urls;
            let title = data.title;
            let isVedio = false;
            let imgextentions = ["png", "jpg", "svg", "jpeg"];
            urls = data.video;
            for (var i = 0; i < imgextentions.length; i++) {
              if (data.image.includes(imgextentions[i])) {

                isVedio = true;
                urls = data.image;

              }
              

            }


            // console.log("video", urls);

            return <Pin key={index} url={urls} title={title} isV={isVedio} id={data._id} />
          })

        }
      </Container>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
// background-color:black;
display:flex;
width:100%;
height:auto;
margin-top:60px;
justify-content: space-between;
flex-wrap: wrap;

`;

const Container = styled.div`
background-color: #00022B;;
column-count:5;
height:100%;
column-gap:4px;
color:white;
margin:0% 9% 0% 9%;
`;