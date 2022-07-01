import React from "react";
import "./Contact.css";
export default function Contacts() {
  return (
    <div>
      <div className="contacts" id="Contact">
        <h1>Get in Touch</h1>
        <div className="center-div">
          <p>I'm actively looking for any new opportunities, in full-stack web development .</p>
        
        {/* <div className="phone">
          <i className="fa fa-phone"> </i>

          <a href="tel:7799820552" target="_blank" rel="noreferrer">
            +91 7799820552
          </a>
        </div> */}
        {/* <div className="phone">
            <i className="fa fa-envelope-o"></i>
            <a href="mailto: chandudaane@gmail.com">
              chandudaane@gmail.com
            </a>
        </div> */}
        </div>
        <a href="tel:6366908416" target="_blank" rel="noreferrer">
          <i className="fa fa-phone"></i>
        </a>
        <a href="https://github.com/venkycoder422" target="_blank" rel="noreferrer">
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/venkatesulu-dommara-863396221/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
       
       
        <a href="mailto: dommaravenkatesulu22@gmail.com">
          <i className="fa fa-envelope-o"></i>
        </a>
      </div>
    </div>
  );
}
