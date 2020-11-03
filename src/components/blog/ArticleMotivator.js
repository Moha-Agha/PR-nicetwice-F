import React from "react";



const ArticleMotivator = ({ image, tags, title, share, likes, views, youtube, spotify }) => {



  return (
    <div className="article-motivator">

      <div className="social-media">
        <a href="1" ><i className="aicon-youtube"></i></a>
        <a href="1-2" ><i className="aicon-spotify"></i></a>
      </div>

      <div >
        <div className="tags">
          <span className="tag">الصيام</span>
          <span className="tag">الأخلاق</span>
          <span className="tag">السلام</span>
        </div>

        <a href="artical" className="title">كيف تحقق المكاسب السياسية العدالة التي تصنع هي التي تكرس بالدين؟</a>

        <div className="article-footer">
          <a href="shaer" className="article-footer_item"><i className="aicon-share"></i> </a>
          <div className="article-footer_item">200K <i className="aicon-heart"></i></div>
          <div className="article-footer_item">200K <i className="aicon-eye"></i> </div>
        </div>
      </div>



      <a href="artical" className="article-image">
        <div className="gradient-dark"></div>
        <img src={image} alt="inislam.net logo" />
      </a>
    </div>
  );
};

export default ArticleMotivator;
