import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./article.css";

const Article = ({ link, link1, imgUrl, texthead, text1, texlink1 }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      {/* <a href={link} target="_blank" rel="noreferrer">
          <img src={imgUrl}
          />
        </a> */}
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        {link1 && (
          <a href={link1} target="_blank" rel="noreferrer">
            {texlink1}
          </a>
        )}
        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            <img src={imgUrl} alt="Article" /> {/* Added alt attribute */}
          </a>
        )}
        {texthead && <p>{texthead}</p>}
        {text1 && <h3>{text1}</h3>}
      </div>
    </div>
  </div>
);

// Define propTypes
Article.propTypes = {
  link: PropTypes.string,
  link1: PropTypes.string,
  imgUrl: PropTypes.string,
  texthead: PropTypes.string,
  text1: PropTypes.string,
  texlink1: PropTypes.string,
};

export default Article;
