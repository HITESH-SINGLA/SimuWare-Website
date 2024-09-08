import React from "react";
import Article from "../../container/article/Article";
import logo from "../../assets/documents.png";
import "./blog.css";
const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1>Learn how to superpower your hardware development with SimuWare!</h1>
      <h2>Documentation</h2>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
        <Article
          link="https://github.com/RadioactiveDK/SimuWare/blob/Add-Website/Documentation/1_Introduction.md"
          imgUrl={logo}
          texthead="Getting started"
          text1="Introduction — What to expect from SimuWare."
        />

        <Article
          link="https://github.com/RadioactiveDK/SimuWare/blob/Add-Website/Documentation/2_Overall_Description.md"
          imgUrl={logo}
          texthead="Overall Description"
          text1="What SimuWare Is."
        />

        <Article
          link="https://github.com/RadioactiveDK/SimuWare/blob/Add-Website/Documentation/3_Specific_Requirements.md"
          imgUrl={logo}
          texthead="Specific Requirements"
          text1="Requirements!."
        />

        <Article
          link="https://github.com/RadioactiveDK/SimuWare/tree/Add-Website/System_Architecture"
          imgUrl={logo}
          texthead="System Architecture"
          text1="Architecture Design."
        />

        <Article
          link="https://docs.google.com/document/d/1tNOaj3bDVqommEh1S_uvYoP_Ef-ACW25/edit"
          imgUrl={logo}
          texthead="Software Design Document"
          text1="Detailed Description of Design and Architecture"
        />
      </div>
    </div>
  </div>
);

export default Blog;
