import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title, snippet }) => {
  return (
    <div className="pandora__blog-container_article">
      <div className="pandora__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="pandora__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
          <p>{snippet}</p>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
