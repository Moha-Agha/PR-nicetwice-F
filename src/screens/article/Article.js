import React, { useEffect, useContext } from "react";

import NavContext from '../../shared/nav/context/navContext';
import ArticleContext from './context/articleContext';

import Preloader from "../../shared/preloader/Preloader";
import Breadcrumb from "../../shared/breadcrumb/Breadcrumb";

import ArticleTitle from "./components/articleTitle/ArticleTitle"
import ArticleInfo from "./components/articleInfo/ArticleInfo"
import ArticleImage from "./components/articleImage/ArticleImage"
import ArticleBody from "./components/articleBody/ArticleBody"
import ArticleMore from "./components/articleMore/ArticleMore"


const Article = (props) => {

  const navContext = useContext(NavContext);
  const{ isMobile }= navContext;

  const articleContext = useContext(ArticleContext);
  const { getArticleBySlug, NewViewArticle, article, loadingArticle } = articleContext;

  useEffect(() => {
    let spl = props.location.pathname.split('/');
    let res = spl[2]
    getArticleBySlug(res)

    NewViewArticle(res);
    // eslint-disable-next-line
  }, [])



  if (loadingArticle) {
    return <Preloader />;

  } else {
    if (article !== null) {
      const {
        _id,
        slug,
        title,
        subtitle,
        date,
        heroImage,
        imageSource,
        socialMedia,
        articleBody,
        likes,
      } = article[0]
      return (
        <>
          <div className="container">
            <div className="article">

              {/* <Sharing articleTitle={title} articleSlug={slug} /> */}

              <Breadcrumb
                title={article[1].title}
                slug={article[1].slug} />

              <ArticleTitle
                title={title}
                subtitle={subtitle} />

              <ArticleInfo
                ReadingTime={wordCount(articleBody)}
                socialMedia={socialMedia}
                author={article[2].name}
                avatar={article[2].avatar}
                date={date} />

              <ArticleImage
                articleTitle={title}
                articleSlug={slug}
                heroImage={heroImage}
                imageSource={imageSource} />

              <ArticleBody
                articleBody={articleBody}
                id={_id}
                likes={likes}
                articleTitle={title}
                articleSlug={slug} />

            </div>
          </div>
          <div className={!isMobile ? 'container' : null}>
            <ArticleMore sectionSlug={article[1].slug} articleSlug={slug} />
          </div>
        </>
      )
    } else {
      return <Preloader />;
    }
  }
};

const wordCount = (articleBody) => {
  let word = articleBody.replace(/(^\s*)|(\s*$)/gi, "");
  word = word.replace(/[ ]{2,}/gi, " ");
  word = word.replace(/\n /, "\n");
  word = word.split(' ').length;
  //word in minute
  let wordInMinute = Math.round(word / 150)

  return wordInMinute
}


export default Article;
