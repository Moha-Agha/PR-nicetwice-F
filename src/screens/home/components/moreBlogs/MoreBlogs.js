import React, { useEffect,useContext } from 'react';
import SectionCard from '../../../../shared/sectionCard/SectionCard';
import SectionCardSkeleton from '../../../../shared/sectionCard/components/Skeleton/SectionCardSkeleton';
import SectionContext from '../../../section/context/sectionContext';


const MoreBlogs = ({title, subtitle,isMobile}) => {

  const sectionContext = useContext(SectionContext);
  const { getSections, sections,loadingSection } = sectionContext;

  useEffect(() => {
    getSections();
    // eslint-disable-next-line
  }, [])

  const giveClassName =(slug)=>{
      switch (slug) {
          case 'frontend-development':
          return 'section-card-front';
          case 'ui-design':
            return 'section-card-ui';
          case 'backend-development':
            return 'section-card-backend';
          case 'ux-design':
            return 'section-card-ux';
          case 'branding':
            return 'section-card-branding';
          default:
            return  ' ';
      }
  }

    return (
     <div className={isMobile? "container-mobile":"container"}>
        <div className="more-blogs">
            <h2 >{title}</h2>
            <p >{subtitle}</p>

            <div className="sections-cards">
            <SectionCardSkeleton />
            
            </div>
        </div>
     </div>
    )
}


export default MoreBlogs