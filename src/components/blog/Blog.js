import React, { useEffect, useState } from "react";


import BlogData from './BlogData'

import BlogOffline from './BlogOffline'
import ArticleMotivator from "./ArticleMotivator"
import PremiumButton from "../uiElements/button/PremiumButton"
import SecondaryButton from "../uiElements/button/SecondaryButton"
import SectionsTag from "./SectionsTag"
import Preloader from "../layout/Preloader"

const Blog = () => {

  const [online, setOnline] = useState(false);

  const [mostViewedArticles, setMostViewedArticles] = useState([]);
  const [newArticles, setNewArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMostViewedArticles({ BlogData });
    setNewArticle({ BlogData });
    setLoading(false)
  }, [])

  return (
    <>{!online ? <BlogOffline /> :
      loading ? <Preloader /> :
        <div className="container">
          <div className="header-page">
            <div>

            </div>
            <p></p>
          </div>


          <div className="article-motivators">
            {
              mostViewedArticles.BlogData.slice(0, 3).map((mostViewedArticle) => {
                return (
                  <ArticleMotivator key={mostViewedArticle.id} image={'https://source.unsplash.com/collection/' + mostViewedArticle.id} tags={mostViewedArticle.id}
                    title={mostViewedArticle.id} share={mostViewedArticle.id}
                    likes={mostViewedArticle.id} views={mostViewedArticle.id}
                    youtube={mostViewedArticle.id} spotify={mostViewedArticle.id} />
                )
              })
            }
          </div>

          <h3 className="home-title_h3">
            المقالات المضافة حديثاً في المدونة
       </h3>

          <div className="article-motivators">
            {
              newArticles.BlogData.slice(0, 6).map((mostViewedArticle) => {
                return (
                  <ArticleMotivator key={mostViewedArticle.id} image={'https://source.unsplash.com/collection/' + mostViewedArticle.id} tags={mostViewedArticle.id}
                    title={mostViewedArticle.id} share={mostViewedArticle.id}
                    likes={mostViewedArticle.id} views={mostViewedArticle.id}
                    youtube={mostViewedArticle.id} spotify={mostViewedArticle.id} />
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
