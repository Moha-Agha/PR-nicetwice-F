import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({image, title, subtitle,slug}) => {
    return (
            <Link to={`/${slug}`} className='card'>
                <div className='card_imag'>
                    <img  src={image} alt={subtitle} />
                </div>  
                <div className='card_text'>
                   <div className='card_text-title'>{title} </div>
                   <div className='card_text-subtitle'>{subtitle} </div>
                </div>
            </Link>
    )
}

export default Card
