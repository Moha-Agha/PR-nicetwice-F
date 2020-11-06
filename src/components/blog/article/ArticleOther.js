import React from "react";
import SecondaryButton from '../../uiElements/button/SecondaryButton';

const ArticleOther = ({ likes }) => {
  return (
    <div className="article_other">

      <div className="article_other-sharing">
        <a href="twitter"><i className="aicon-twitter"></i></a>
        <a href="facebook"><i className="aicon-facebook"></i></a>
        <a href="whatsapp"><i className="aicon-whatsapp"></i></a>
        <a href="link"><i className="aicon-link"></i></a>
      </div>

      <a href="#" className="article_like">
        <span> liken</span>
        <span className='article_heart-like'>
          <span>{likes}</span>
          <i className="aicon-heart-like"></i>
        </span>
      </a>

    </div>
  );
};

export default ArticleOther;
