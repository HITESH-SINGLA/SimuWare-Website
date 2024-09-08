import React from "react";

import "./header.css";

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h2>Welcome to SimuWare Documentation Page</h2>
      <p></p>
      <div className="header-content__input">
        <a href="https://github.com/RadioactiveDK/SimuWare" target="_blank" rel="noreferrer">
          <button type="button">Download</button>
        </a>
        <a href="https://github.com/RadioactiveDK/SimuWare" target="_blank" rel="noreferrer">
          <button type="button">Github</button>
        </a>
      </div>
    </div>
  </div>
);

export default Header;
