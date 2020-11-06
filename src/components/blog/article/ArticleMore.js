import React from "react";

import { cardsData } from "../BlogData";

import ArticleMotivator from '../ArticleMotivator';


const ArticleMore = () => {


  console.log(cardsData);
  return (
    <div className="article_more">
      <h2>المزيد من المقالات المميزة ؟</h2>
      <div className="article_more_blogs">

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
  );
};

export default ArticleMore;
