import React from "react";
import {IMAGE_URL} from "../../../../utils/variables";

const ArticleInfo = ({ ReadingTime, socialMedia, author, avatar, date }) => {

  let publishDate = date.split('-').[0] + '.' + date.split('-').[1] + '.' + date.split('-').[2].substring(0, 2)

  const { youtube, spotify } = socialMedia;


  return (
    <div className="article_info">

      <div className="article_author">
        <img src={`${IMAGE_URL}image/${avatar}`} alt={"article author "+author} width="55" height="55" />
        <div>
          <div className="article_author_name"> {author} </div>
          <div className="article_author_publish-date">{publishDate}</div>
        </div>
      </div>

      <div className="article_reading-send-container">
        <div className="article_reading-duration">
          <i className="aicon-clock"></i>
          <span>{ReadingTime}</span>
          <span>Minuten lesen</span>
        </div>


        <a href={youtube} className="article_send-me-to" target="_blank" rel="noopener noreferrer">
          <i className="material-icons md-18">play_circle</i>
          <span> Artikel ansehen </span>
        </a>

        <a href={spotify} className="article_send-me-to" target="_blank" rel="noopener noreferrer">
          <i className="material-icons md-18">headset</i>
          <span> Artikel anhören </span>
        </a>

      </div>
    </div>
  );
};

export default ArticleInfo;
