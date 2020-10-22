import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios';

import Preloader from "../uiElements/Preloader"
import PortfolioItem from "./PortfolioItem"

const Portfolio = () => {

  const [portfolioItems, setPortfolioItems] = useState([]);


  useEffect(() => {
    window.addEventListener('load', resizeScreen)
    window.addEventListener('resize', resizeScreen)
  });

  function resizeScreen() {
    let Items

    if (window.innerWidth <= 750) {
      Items = <Fragment>
        < PortfolioItem number={1} image={'portfolio-1'} type='.png' />
        < PortfolioItem number={2} image={'portfolio-2'} type='.png' />
        < PortfolioItem number={3} image={'portfolio-3'} type='.png' />
        < PortfolioItem image={'portfolio-4'} type='.jpg' content='false' />
      </Fragment>
    } else {
      Items = <Fragment>
        < PortfolioItem number={2} image={'portfolio-2'} type='.png' />
        < PortfolioItem image={'portfolio-4'} type='.jpg' content='false' />
        < PortfolioItem number={1} image={'portfolio-1'} type='.png' />
        < PortfolioItem number={3} image={'portfolio-3'} type='.png' />
      </Fragment>
    }

    setPortfolioItems(Items)
  }


  return (
    <div className='portfolio'>

      <h1 className="portfolio_title"> Portfolio </h1>
      <p className="portfolio_subtitle">UI-UX design website and App programming</p>

      {portfolioItems}

    </div>
  );


};

export default Portfolio;



