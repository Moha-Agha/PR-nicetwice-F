import React, { useEffect, useState } from "react";

import { cardsData, sectionsData } from './BlogData'

import FooterRedirection from "../0_1_layout/footer/FooterRedirection"

import About from "../about/About"
import ArticleMotivator from "./ArticleMotivator"
import SectionsTag from "./SectionsTag"
import Preloader from "../0_1_layout/Preloader"


const Blog = () => {

  const [online, setOnline] = useState(false);

  const [sectionsTag, setSectionsTag] = useState([]);
  const [mostViewedArticles, setMostViewedArticles] = useState([]);
  const [newArticles, setNewArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState()

  useEffect(() => {
    window.scrollTo(0, 0);
    setWidth(window.innerWidth);
    setSectionsTag({ sectionsData });
    setMostViewedArticles({ cardsData });
    setNewArticle({ cardsData });
    setOnline(true)
    setLoading(false)
  }, [])

  return (
    <>
      {loading ? <Preloader /> :
        <>

          <About />

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
              <div className="article-motivators-contener8">
                {
                  newArticles.cardsData.slice(0, 8).map(({ id, image, tags, title, share, likes, views, youtube, spotify }) => {
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

          <FooterRedirection />
        </>

      }
    </>
  );

};

export default Blog;
