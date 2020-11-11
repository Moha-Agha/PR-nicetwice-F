import React from "react";


const ArticleADDesktop = () => {
  const ad = <p>werbung!</p>
  return (
    <>
      <div className="article_body_ad_info">
        <i className="aicon-info"></i>
          Wir sind nicht verantwortlich für den Inhalt dieser Anzeige.
      </div>
      <div className="article_body_ad_ad">
        {ad}
      </div>
    </>
  );
};

export default ArticleADDesktop;
