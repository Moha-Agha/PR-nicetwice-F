import React from "react";



const ArticleMotivator = ({ id, image = 'https://source.unsplash.com/collection/12', tags = ['nicetwice', 'logo'], title, share, likes = '200K', views = '200K', youtube, spotify }) => {



  return (
    <a href={`/article/${id}`} className="article-motivator" >

      <div className="article_motivator-content">
        <div className="article_social-media">
          <a href={`/blog/article/${id}`} className="a-youtube"><i className="aicon-youtube"></i></a>
          <a href={`/blog/article/${id}`} className="a-spotify"><i className="aicon-spotify"></i></a>
        </div>

        <div className="article_footer">
          <div className="article_tags">
            {tags.map((tag) => { return <span key={tag} className="tag">{tag}</span> })}
          </div>

          <a href={`/blog/article/${id}`} className="article_title hover-1">
            {title}
          </a>

          <div className="article_info">
            <a href={share} className="article_info_item">Teilen <i className="aicon-share"></i> </a>
            <div className="article_info_item"> {likes} <i className="aicon-heart"></i></div>
            <div className="article_info_item"> {views} <i className="aicon-eye"></i> </div>
          </div>
        </div>
      </div>

      <div className="article_image">
        <div className="article_gradient-dark"></div>
        <img src={image} alt="nicetwice" />
      </div>
    </a>
  );
};

export default ArticleMotivator;
