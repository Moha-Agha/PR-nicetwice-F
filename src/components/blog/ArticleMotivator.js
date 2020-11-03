import React from "react";



const ArticleMotivator = ({ image, tags = ['nicetwice', 'logo'], title, share, likes = '200K', views = '200K', youtube, spotify }) => {



  return (
    <a href='artical' className="article-motivator" >

      <div className="article_motivator-content">
        <div className="article_social-media">
          <a href="1" ><i className="aicon-youtube"></i></a>
          <a href="1-2" ><i className="aicon-spotify"></i></a>
        </div>

        <div >
          <div className="article_tags">
            {tags.map((tag) => { return <span key={tag} className="tag">{tag}</span> })}
          </div>

          <a href="artical" className="article_title">
            {title}
          </a>

          <div className="article_footer">
            <a href={share} className="article_footer_item"><i className="aicon-share"></i> </a>
            <div className="article_footer_item"> {likes} <i className="aicon-heart"></i></div>
            <div className="article_footer_item"> {views} <i className="aicon-eye"></i> </div>
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
