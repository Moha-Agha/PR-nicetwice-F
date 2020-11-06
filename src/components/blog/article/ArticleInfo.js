import React from "react";

const ArticleInfo = ({ ReadingTime, youtube, spotify, author, authorImage, date }) => {
  return (
    <div className="article_info">

      <div className="article_author">
        <img src={authorImage} alt="article author" width="55" height="55" />
        <div>
          <div className="article_author_name"> {author} </div>
          <div className="article_author_publish-date">{date}</div>
        </div>
      </div>

      <div >
        <div className="article_reading-duration">
          <i className="aicon-clock"></i>
          <span>{ReadingTime}</span>
          <span>Minuten lesen</span>
        </div>

        <div className="article_send-me-to">
          <a href={youtube}>
            <i className="aicon-youtube"></i>
            <span> Artikel ansehen </span>
          </a>
        </div>

        <div className="article_send-me-to">
          <a href={spotify}>
            <i className="aicon-spotify"></i>
            <span> Artikel anhören </span>
          </a>
        </div>


      </div>
    </div>
  );
};

export default ArticleInfo;
