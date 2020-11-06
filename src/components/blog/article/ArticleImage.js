import React from "react";

const ArticleImage = ({ HeroImage, imageSource }) => {
  return (
    <div className="article_image">
      <img src={HeroImage} />
      <span className="article_image_image-info">{imageSource}</span>
    </div>
  );
};

export default ArticleImage;
