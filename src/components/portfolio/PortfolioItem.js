import React from "react";

const PortfolioItem = ({ number = '', image = '', type = '.jpg', href = '', content = true }) => {

  let cardContent
  let img
  let path

  if (image !== '') {
    path = require('../../media/image/' + image + type)

    img = <img src={path} alt="niceTwice.de portfolio" />
  } else {
    img = <h1 className='text-center pt-5'>no image</h1>
  }

  if (content === true) {
    cardContent = < a href={href} target="_blank" rel="noopener noreferrer" className="portfolio-item-img" >
      {img}
    </a >
  } else {
    cardContent = <span className='portfolio-asking'>
      <div className='asking_first-layer'>
        <h2>Ein freier Platz für<br /> dein business!</h2>
      </div>
      <span className='asking_second-layer'>
        {img}
      </span>
    </span >
  }


  return (
    <div className='portfolio-item'>
      <span className='portfolio-item_number'>{number}</span>
      <div className='portfolio-item_card'>
        {cardContent}
      </div>
    </div>
  );
};

export default PortfolioItem;



