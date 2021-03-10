import React from 'react';
import BlogCard from '../../../../shared/blogCard/BlogCard';

import briefing from '../../../../media/image/briefing.jpg';
import design from '../../../../media/image/design.jpg';
import programing from '../../../../media/image/programing.jpg';

const WorkProcess = ({title, subtitle,isMobile}) => {
    return (       
        <div className={isMobile? "container-mobile":"container"}>
        <div className="work-process">
            <h2 >{title}</h2>
            <p >{subtitle}</p>
            
            <div className="blog-cards">
                <BlogCard 
                section={'ux-design'} 
                heroImage={briefing} 
                title={'Project brief with the Data is the start to get your success.'}/>
                <BlogCard 
                section={'ui-design'} 
                heroImage={design} 
                title={'User flow then the nice user interface design.'}/>
                <BlogCard 
                section={'frontend-development'} 
                heroImage={programing} 
                title={'Finally the coding will start then testing, testing and deploy'}/>
            </div>
        </div>
        </div>
    )
}

export default WorkProcess

