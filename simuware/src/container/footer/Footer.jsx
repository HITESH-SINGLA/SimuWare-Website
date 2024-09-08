import React from "react";
// import logo from '../../logo.png';
import "./footer.css";

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-heading">
      <h1 className="gradient__text">
        Please leave a feedback/ message here! <break /> Thanks!
      </h1>
    </div>

    <div className="footer-btn">
      <p>
        <a href="mailto:simuware2024@gmail.com" target="_blank" rel="noreferrer">
          Leave a Message
        </a>
      </p>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">
        {/* <img src={logo} alt="gpt3_logo" /> */}
        <p>
          The creator does not permit use of any content of this website <br /> All Rights Reserved
        </p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2024 SimuWare. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
