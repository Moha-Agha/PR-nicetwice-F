import React from "react";

import ArticleOther from './ArticleOther'
import ArticleADDesktop from './ArticleADDesktop'

const ArticleBody = ({ articleBody }) => {

  const { intro, body, conclusion, likes } = articleBody

  return (

    <div className="article_body">

      <div className="article_body_contener">

        <div className='article_intro_text'>{intro}</div>

        <div className="article_body_image">
          <img src="https://source.unsplash.com/collection/60" />
          <span className="article_body_imageimage-info">
            Quelle - so und so Seite
        </span>
        </div>
        <div className='article_body_text'>{body}</div>
        <div className='article_conclusion_text'>{conclusion}</div>


        <ArticleOther
          likes={likes} />

      </div>

      <div className="article_body_ad-desktop">
        <ArticleADDesktop />
      </div>
    </div>
  );
};

export default ArticleBody;
