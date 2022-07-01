import React from "react";
import Image from "./img/Venkatesulu.JPG";

import "./about.css";
export default function About() {
  return (
    <div>
      <div className="about-bg" id="about">
        <h1>About</h1>

        <div className="about-section">
          <div className="profile-img">
            <img src={Image} alt="img" />
          </div>

          <div className="para">
       
            <p >
            I’m a full-stack web developer and creative coder who specializes in MERN stack development. My mission is to translate user-focused designs into pixel-perfect websites or applications that run blazing fast. A passionate learner who's always willing to learn and work across technologies and domains. I love to explore new technologies and leverage them to solve real-life problems.
            <br />
            {/* <br />I am a Mechanical Engineer Who Fell in Love
           
            With Coding. */}
            </p>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
}
