import React, { useEffect, useContext } from "react";

import NavContext from '../../shared/nav/context/navContext';
import SectionContext from '../section/context/sectionContext';
import ArticleContext from '../article/context/articleContext';

import BlogCard from "../../shared/blogCard/BlogCard"
import SectionsTag from "./components/sectionsTag/SectionsTag"
import Preloader from "../../shared/preloader/Preloader"


const Blog = () => {

  const navContext = useContext(NavContext);
  const{ isMobile }= navContext;

  const sectionContext = useContext(SectionContext);
  const { getSections, sections, loadingSection } = sectionContext;

  const articleContext = useContext(ArticleContext);
  const { getMostVisitedArticles, getLatestArticles, mostVisitedArticles, latestArticles, loadingArticle } = articleContext;


  useEffect(() => {
    getSections();
    //most visited atricles
    getMostVisitedArticles(3);
    //Latest articles articles
    getLatestArticles(8);

    // eslint-disable-next-line
  }, [])

  return (
    <>
      {loadingSection && loadingArticle ? <Preloader /> :
        <>


            <div className={isMobile ?"sections-tag_container":"container"}>
              <div className="sections-tag">
                {sections ? sections.map((section) => {
                    return <SectionsTag key={section._id} id={section._id} title={section.title} slug={section.slug} />
                }) : <Preloader />}
              </div>
            </div>

          <div className='container'>
            <div className="blog-cards">
                {mostVisitedArticles !== null && mostVisitedArticles.map(({ _id, slug, heroImage, title,  }) => {
                  return (
                    <BlogCard
                      key={_id}
                      id={_id}
                      slug={slug}
                      heroImage={heroImage}
                      title={title}
                       />
                  )
                })
                }
            </div>

            {latestArticles !== null && (latestArticles.length !== 0 && <h4 className="blog-title-h4">Neue Artikel</h4>)}
            <div className="blog-cards">
                {
                  latestArticles !== null && latestArticles.map(({ _id, slug, heroImage, title }) => {
                    return (
                      <BlogCard
                        key={_id}
                        id={_id}
                        slug={slug}
                        heroImage={heroImage}
                        title={title}
                        />
                    )
                  })
                }
            </div>

          </div>

        </>

      }
    </>
  );

};

export default Blog;
