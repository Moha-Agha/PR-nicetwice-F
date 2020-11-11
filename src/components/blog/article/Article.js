import React, { useState, useEffect } from "react";

import ArticlesData from './ArticlesData'

import Preloader from "../../layout/Preloader"

import Breadcrumb from "./Breadcrumb"
import ArticleTitle from "./ArticleTitle"
import ArticleInfo from "./ArticleInfo"
import ArticleImage from "./ArticleImage"
import ArticleBody from "./ArticleBody"
import ArticleMore from "./ArticleMore"

import Sharing from "./Sharing"


const Article = () => {
  const [data, setData] = useState({});
  const [width, setWidth] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setData(ArticlesData)
    setWidth(window.innerWidth);
    setLoading(false)
  }, [])

  const {
    id,
    section,
    title,
    subtitle,
    ReadingTime,
    youtube,
    spotify,
    author,
    authorImage,
    date,
    HeroImage,
    imageSource,
    articleBody,
    likes,
    views,
    articleSuggestion,
    tags } = data


  if (loading) {
    return <Preloader />;
  } else {
    return (
      <>
        <div className="container">
          <div className="article">

            <Sharing />

            <Breadcrumb
              section={section} />

            <ArticleTitle
              title={title}
              subtitle={subtitle} />

            <ArticleInfo
              ReadingTime={ReadingTime}
              youtube={youtube}
              spotify={spotify}
              author={author}
              authorImage={authorImage}
              date={date} />

            <ArticleImage
              HeroImage={HeroImage}
              imageSource={imageSource} />

            <ArticleBody
              articleBody={articleBody}
              likes={likes} />

          </div>
        </div>
        <div className={width > 700 ? 'container' : null}>
          <ArticleMore />
        </div>
      </>
    )
  }
};

export default Article;
