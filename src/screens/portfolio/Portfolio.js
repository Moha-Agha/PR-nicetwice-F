import React, { useEffect } from 'react';
import { PortfolioData } from "./components/PortfolioData";

import BackTo from "../../shared/button/BackTo";
import PortfolioItem from "./components/PortfolioItem";
import UiLoading from "../../shared/uiLoading/UiLoading";


const Portfolio = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);

  return (
    <UiLoading>
    <div className="container">
      <BackTo to='/' title='Zurück zum Home' />
      <div id="portfolio" >

        <h1 className="portfolio_title">Portfolio</h1>
        <p className="portfolio_subtitle">UI-UX design website and App programming</p>

        <div className='portfolio'>
          {PortfolioData.map(({ id, title, image, type, href,behance }) => {
            return < PortfolioItem
                      key={id}
                      number={id}
                      title={title}
                      image={image}
                      type={type}
                      href={href}
                      behance={behance}
                      />
          })}
        </div>

      </div>
    </div>
    </UiLoading>
  )
        
};

export default Portfolio;



