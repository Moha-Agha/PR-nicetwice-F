import React, { useEffect, useContext } from "react";
import SectionContext from '../../../section/context/sectionContext';

import BlogCard from '../../../../shared/blogCard/BlogCard';
import Preloader from "../../../../shared/preloader/Preloader"

const ArticleMore = ({ sectionSlug, articleSlug }) => {

  const sectionContext = useContext(SectionContext);
  const { getSection, section } = sectionContext;

  useEffect(() => {
    getSection(sectionSlug)
    // eslint-disable-next-line
  }, [])
  
  return (
    <div className="article_more">


      <div className="article_more_blogs">
        <div className="article-motivators-contener">
          {section !== null ? section[1].filter(sectionSlugs => sectionSlugs.slug !== articleSlug).slice(0, 2).map(({
            _id,
            slug,
            title,
            subtitle,
            heroImage
          }) => {
            return (
              <BlogCard
                key={_id}
                id={_id}
                slug={slug}
                title={title}
                subtitle={subtitle}
                heroImage={heroImage}
                section={section[0].title}
              />
            )
          }) : <Preloader />
          }
        </div>
      </div>


    </div>
  );
};

export default ArticleMore;
