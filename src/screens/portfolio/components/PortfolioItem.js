import React from "react";

const PortfolioItem = ({ number = '',title='', image = '', type = '.jpg', href = '#' }) => {

  let img
  let path

  if (image !== '') {
    path = require('../../../media/image/' + image + type)
    img = (
      <div className='portfolio-item_card'>
        < a href={href} target="_blank" rel="noopener noreferrer" className="portfolio-item-img" >
          <img src={path} alt="niceTwice.de portfolio" />
        </a>
      </div>
    )
  } else {
    img = <div className='free-place'><div><h2>EIN FREIER PLATZ<br />FÜR DEIN BUSINESS!</h2></div></div>
  }




  return (
    <a href={href} className='portfolio-item'>
      <div className="portfolio-item_titel">
        {title}
      <div className="portfolio-item_subtitle">UI + Ux + Development</div>
      </div>
      <img className="portfolio-item_image" src={path} alt="niceTwice.de portfolio" />
    </a>
  );
};

export default PortfolioItem;



