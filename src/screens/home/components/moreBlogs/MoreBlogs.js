import React, { useEffect,useContext } from 'react';
import SectionCard from '../../../../shared/sectionCard/SectionCard';
import SectionCardSkeleton from '../../../../shared/sectionCard/components/Skeleton/SectionCardSkeleton';
import SectionContext from '../../../section/context/sectionContext';


const MoreBlogs = ({title, subtitle,isMobile}) => {

  const sectionContext = useContext(SectionContext);
  const { getSections, sections } = sectionContext;

  useEffect(() => {
    getSections();
    // eslint-disable-next-line
  }, [])

    return (
     <div className={isMobile? "container-mobile":"container"}>
        <div className="more-blogs">
          <div className={!isMobile? "container-mobile":"container"}>
            <h2 >{title}</h2>
            <p >{subtitle}</p>
          </div>
            <div className="sections-cards">
            { sections && sections !== null ? sections.map((section) => {
                  return <SectionCard 
                  key={section._id}
                  title={section.title}
                  slug={section.slug} />
                }) : <SectionCardSkeleton />}
            </div>
        </div>
     </div>
    )
}


export default MoreBlogs