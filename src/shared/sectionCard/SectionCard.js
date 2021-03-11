import React from 'react';
import { Link } from 'react-router-dom';
import {SECTION_LOCA} from '../../localization/de/Language';

import frontenddevelopment from './image/Frontend_development.svg';
import backenddevelopment from './image/Backend_development.svg';
import branding from './image/Branding.svg';
import uxdesign from './image/User_experience.svg';
import uidesign from './image/User_Interface.svg';


const SectionCard = ({classStyle,title,subtitle,slug}) => {

    let icons;

    switch (slug.replace('-','')) {
        case 'frontenddevelopment':
            icons = frontenddevelopment
            break;
        case 'backenddevelopment':
            icons = backenddevelopment
            break;
        case 'branding':
            icons = branding
            break;
        case 'uxdesign':
            icons = uxdesign
            break;
    
        default:
            icons = uidesign
            break;
    }

    return (
            <Link to={`/section/${slug}`} className={"section-card " + classStyle}>
                <div className= 'section-card_text section-card_text-padding' >
                    <img className='section-card_imag' src={icons} /> 
                    <div className='section-card_text-title'>{title} </div>
                    <div className='section-card_text-subtitle'>{subtitle? subtitle: SECTION_LOCA.articles+' '+SECTION_LOCA.Browse} </div>
                </div>
            </Link>
    )
}

export default SectionCard;