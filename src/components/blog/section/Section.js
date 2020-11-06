import React, { useEffect, useState } from "react";

import { cardsData } from '../BlogData'

import ArticleMotivator from "../ArticleMotivator"

import HeaderOfSection from "./HeaderOfSection"
import Pagination from "../../uiElements/Pagination"
import BackTo from "../../uiElements/button/BackTo"

import Preloader from "../../layout/Preloader"

const Section = () => {

  const [sectionArticles, setsectionArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setsectionArticles({ cardsData });
    setLoading(false)
  }, [])


  if (loading) {
    return <Preloader />;
  } else {
    return (
      <div className='container'>

        <BackTo to='/blog' title='Zurück zum Blog' />

        <HeaderOfSection />

        <div className="article-motivators">
          {
            sectionArticles.cardsData.slice(0, 6).map(({ id, image, tags, title, share, likes, views, youtube, spotify }) => {
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

        {/* <Pagination /> */}
      </div>
    )
  }
};

export default Section;
