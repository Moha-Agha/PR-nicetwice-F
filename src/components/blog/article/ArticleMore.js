import React from "react";

import { cardsData } from "../BlogData";

import ArticleMotivator from '../ArticleMotivator';


const ArticleMore = () => {

  return (
    <div className="article_more">
      <h2>Ähnliche Artikel</h2>


      <div className="article_more_blogs">
        <div className="article-motivators-contener">
          {
            cardsData.slice(0, 2).map(({ id, image, tags, title, share, likes, views, youtube, spotify }) => {
              return (
                <ArticleMotivator
                  key={id}
                  id={id}
                  image={image + id}
                  tags={tags}
                  title={title}
                  share={share}
                  likes={likes}
                  views={views}
                  youtube={id}
                  spotify={id} />
              )
            })
          }
        </div>
      </div>


    </div>
  );
};

export default ArticleMore;
