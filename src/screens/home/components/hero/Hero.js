import React from 'react';
import halloHand from '../../../../media/svg/hallo-hand.svg';

const Hero = ({title,subtitle}) => {
      return (
        <div className="home-hero">
            <img src={halloHand} className="home-hero_hallo-hand" alt="Hallo hand icon nicetwice.de"/>
            <span className="home-hero_title">{title}</span>
            <br/>
            <span className="home-hero_subtitle">{subtitle}</span>
        </div>
    ) 
}

export default Hero
