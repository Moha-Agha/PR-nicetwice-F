import React from 'react';

import {IMAGE_URL} from '../../utils/variables';


const BlogCard = ({id,slug, heroImage, section, title }) => {
    return (
        <a href={slug !== undefined ? `/article/${slug}` : '#'} className="blog-card">
           
           <div className="blog-card_img">
            {heroImage.image === undefined ?
            <img src={heroImage} alt={title} /> :
            <img src={`${IMAGE_URL}image/${heroImage.image}`} alt={title} />
             }  
           </div>

           <div className="blog-card_section-name">{section}</div>
           <div className="blog-card_title">{title}</div>

        </a>
    )
}

export default BlogCard
