import React, { useEffect, useState } from "react";


import { cardsData, sectionsData } from './BlogData'

import BlogOffline from './BlogOffline'
import ArticleMotivator from "./ArticleMotivator"
import PremiumButton from "../uiElements/button/PremiumButton"
import SecondaryButton from "../uiElements/button/SecondaryButton"
import SectionsTag from "./SectionsTag"
import Preloader from "../layout/Preloader"

const Blog = () => {

  const [online, setOnline] = useState(false);

  const [sectionsTag, setSectionsTag] = useState([]);
  const [mostViewedArticles, setMostViewedArticles] = useState([]);
  const [newArticles, setNewArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSectionsTag({ sectionsData });
    setMostViewedArticles({ cardsData });
    setNewArticle({ cardsData });
    setLoading(false)
  }, [])

  return (
    <>{!online ? <BlogOffline /> :
      loading ? <Preloader /> :
        <div className="container">
          <div className="blog-header-page">
            {sectionsTag.sectionsData.map(({ title, articleNumber }) => {
              return <SectionsTag key={title} title={title} articleNumber={articleNumber} />
            })}
          </div>


          <div className="article-motivators">
            {
              mostViewedArticles.cardsData.slice(0, 3).map(({ id, image, tags, title, share, likes, views, youtube, spotify }) => {
                return (
                  <ArticleMotivator key={id}
                    image={image + id}
                    tags={tags}
                    title={title}
                    share={share}
                    likes={likes}
                    views={views}
                    youtube={id} spotify={id} />
                )
              })
            }
          </div>

          <h3 className="blog-home-title_h3">Neue Artikel</h3>

          <div className="article-motivators">
            {
              newArticles.cardsData.slice(0, 6).map(({ id, image, tags, title, share, likes, views, youtube, spotify }) => {
                return (
                  <ArticleMotivator key={id}
                    image={image + id}
                    tags={tags}
                    title={title}
                    share={share}
                    likes={likes}
                    views={views}
                    youtube={id} spotify={id} />
                )
              })
            }
          </div>


          <div className="text-buttons-group">
            <div>
              <SecondaryButton />
              <SecondaryButton />
              <SecondaryButton />
            </div>
            <p></p>
          </div>
        </div>
    }
    </>
  );

};

export default Blog;
