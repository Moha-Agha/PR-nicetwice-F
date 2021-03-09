import React from 'react';
import { Link } from 'react-router-dom';
import {SECTION_LOCA} from '../../localization/de/Language';

import frontend from './image/Frontend_icon.png';
import ui from './image/ui_design_icon.png';

const SectionCard = ({classStyle,icon,title, subtitle,slug}) => {

let cardIcon

    switch (icon) {
        case 'frontend':
            cardIcon =  <img  src={frontend} alt={"nicetwice.de " + title + "section"} />
            break;
        case 'ui':
            cardIcon =  <img  src={ui} alt={"nicetwice.de " + title + "section"} />
            break;
        default:
            cardIcon =  ''
            break;
    }
 
    return (
  
            <Link to={`/section/${slug}`} className={"section-card " + classStyle}>
                {icon === 'no'? "":<div className='section-card_imag'>{cardIcon}</div> }
                <div className= {icon === 'no' ? 'section-card_text section-card_text-padding' :'section-card_text'}>
                    <div className='section-card_text-title'>{title} </div>
                    <div className='section-card_text-subtitle'>{subtitle? subtitle: SECTION_LOCA.articles+' '+SECTION_LOCA.Browse} </div>
                </div>
            </Link>
          
    )
}

export default SectionCard;