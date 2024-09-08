import React from "react";
import "./doc.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Footer, Header, Navbar } from "../../container";
import { Blog, Features } from "../../page";
function Doc() {
  return (
    <div className="Doc">
      <div className="gradient__bg">
        <div className="nav">
          <Navbar />
        </div>
        <Header />
      </div>
      <Blog />
      <Features />
      <Footer />
    </div>
  );
}

export default Doc;
