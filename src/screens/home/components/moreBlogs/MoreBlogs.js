import React from 'react';
import SectionCard from '../../../../shared/sectionCard/SectionCard';

import {SECTION_LOCA} from '../../../../localization/de/Language'

const MoreBlogs = ({title, subtitle}) => {
    return (
     <div className="more-blogs">
        <h2 >{title}</h2>
        <p >{subtitle}</p>

        <div className="sections-cards">
            <SectionCard 
            classStyle={'section-card-front'}
            icon={'frontend'}
            title={SECTION_LOCA.frontend}
            subtitle={SECTION_LOCA.frontendSubtitle}
            slug={'frontend-development'} />

            <SectionCard 
            classStyle={'section-card-ui'} 
            icon={'ui'} 
            title={SECTION_LOCA.uiDesign} 
            subtitle={SECTION_LOCA.uiDesignSubtitle}
            slug={'ui-design'} />

            <SectionCard 
            classStyle={'section-card-backend'} 
            icon={'no'} 
            title={SECTION_LOCA.backend} 
            subtitle={SECTION_LOCA.backendSubtitle}
            slug={'backend-development'} />

            <SectionCard 
            classStyle={'section-card-ux'} 
            icon={'no'} 
            title={SECTION_LOCA.uxDesign} 
            subtitle={SECTION_LOCA.uxDesignSubtitle}
            slug={'ux-design'} />
            
            <SectionCard 
            classStyle={'section-card-branding'} 
            icon={'no'} 
            title={SECTION_LOCA.branding} 
            subtitle={SECTION_LOCA.brandingSubtitle}
            slug={'branding'} />

        </div>
     </div>
    )
}

export default MoreBlogs