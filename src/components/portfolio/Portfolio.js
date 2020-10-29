import React from "react";

import PortfolioItem from "./PortfolioItem"

const Portfolio = () => {

  return (
    <div id="portfolio" >

      <h1 className="portfolio_title"> Portfolio </h1>
      <p className="portfolio_subtitle">UI-UX design website and App programming</p>

      <div className='portfolio'>
        < PortfolioItem number={1} image={'portfolio-1'} type='.jpg' href='https://that.im/' />
        < PortfolioItem number={2} image={'portfolio-2'} type='.jpg' href='https://inislam.net/' />
        < PortfolioItem number={3} image={'portfolio-3'} type='.jpg' href='#' />
        < PortfolioItem number={4} type='.jpg' href='#' />
      </div>
    </div>
  )

};

export default Portfolio;



