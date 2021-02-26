import React from "react";
import Sharing from "../sharing/Sharing";
import {IMAGE_URL} from '../../../../utils/variables'

const ArticleImage = ({ 
                      articleTitle = ' ',
                      articleSlug = ' ',
                      heroImage = { image: '',
                      copyright: "niceTwice.de",
                      alt: "niceTwice.de"
                      } }) => {
      return (
        <>
          <div className="article_hero-image">
            <Sharing articleTitle={articleTitle} articleSlug={articleSlug} />
            <img src={`${IMAGE_URL}image/${heroImage.image}`} alt={heroImage.alt} />
            <span className="article_image_image-info">{heroImage.copyright}</span>
          </div>
        </>
      );
};

export default ArticleImage;
