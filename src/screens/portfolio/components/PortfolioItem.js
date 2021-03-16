import React, { useState } from "react";
import OpenInNewTab from '../../../shared/link/OpenInNewTab';

const PortfolioItem = ({ behance = '',title='', image = '', type = '.jpg', href = '#' }) => {

  const [step, setStep] = useState(0);
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

  const stepHandler=()=>{
    setStep(1)
  }

  const switchStep = () => { switch (step) {
      case 1:
        return (
          <>  
          <div className="portfolio-item_titel-link">
            <span onClick={() => OpenInNewTab(behance)} >Behance</span>
             / <span onClick={() => OpenInNewTab(href)} >Onlein</span></div>
           <div className="portfolio-item_subtitle">
           Dieses Projekt ist noch nicht abgeschlossen.
           </div>
          </>
        )
    default:
      return (
        <>
          {title}
          <div className="portfolio-item_subtitle">UI + Ux + Development</div>
        </>
      )
    } }


  return (
    <div onClick={stepHandler} className='portfolio-item'>
      <div className="portfolio-item_titel">
        {behance ==='#'? <a href={href} >{title}  <div className="portfolio-item_subtitle">UI + Ux + Development</div></a>
        :switchStep()}
      </div>
      <img className="portfolio-item_image" src={path} alt="niceTwice.de portfolio" />
    </div>
  );
};

export default PortfolioItem;



