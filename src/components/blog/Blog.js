import React, { useEffect, useState } from "react";

import { cardsData, sectionsData } from './BlogData'

import BlogOffline from './BlogOffline'
import BackTo from "../uiElements/button/BackTo"

import ArticleMotivator from "./ArticleMotivator"
import SectionsTag from "./SectionsTag"
import Preloader from "../layout/Preloader"

const Blog = () => {

  const [online, setOnline] = useState(false);

  const [sectionsTag, setSectionsTag] = useState([]);
  const [mostViewedArticles, setMostViewedArticles] = useState([]);
  const [newArticles, setNewArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth);
    setSectionsTag({ sectionsData });
    setMostViewedArticles({ cardsData });
    setNewArticle({ cardsData });
    // setOnline(true)
    setLoading(false)
  }, [])

  return (
    <>{!online ? <BlogOffline /> :
      loading ? <Preloader /> :
        <>
          <div className='container' >
            <BackTo to='/' title='Zurück zur Homepage' />
          </div>

          <div className={width > 700 ? 'container' : null}>

            <div className="blog_sections-tag">
              <div className="blog_sections-tag-contener">
                {sectionsTag.sectionsData.map(({ name, title, articleNumber }) => {
                  return <SectionsTag key={name} name={name} title={title} articleNumber={articleNumber} />
                })}
              </div>
            </div>

            <div className="article-motivators">
              <div className="article-motivators-contener">
                {
                  mostViewedArticles.cardsData.slice(0, 3).map(({ id, image, tags, title, share, likes, views, youtube, spotify }) => {
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

            <h3 className="blog-home-title_h3">Neue Artikel</h3>

            <div className="article-motivators">
              <div className="article-motivators-contener">
                {
                  newArticles.cardsData.slice(0, 6).map(({ id, image, tags, title, share, likes, views, youtube, spotify }) => {
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
        </>

    }
    </>
  );

};

export default Blog;
