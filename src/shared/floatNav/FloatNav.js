import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const FloatNav = () => {
    const [toTop, setToTop] = useState(false)
    let startPoint = 250
  
    window.onscroll = () => {
      document.body.scrollTop > startPoint || document.documentElement.scrollTop > startPoint ?
        setToTop(true) :
        setToTop(false)
    };
  
    
    return (
      < span className={toTop ? "scroll-buttons " : "scroll-buttons hide"} >
      <AnchorLink href="#nav" ><i className='scroll-button material-icons md-36'>expand_less</i> </AnchorLink>
      </span>
    );
}

export default FloatNav