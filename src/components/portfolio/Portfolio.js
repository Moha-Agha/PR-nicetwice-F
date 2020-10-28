import React, { useState, useEffect, Fragment } from "react";

import Preloader from "../layout/Preloader"
import PortfolioItem from "./PortfolioItem"

const Portfolio = () => {

  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    window.addEventListener('resize', resizeScreen)
    resizeScreen()
  }, []);

  function resizeScreen() {
    let Items

    if (window.innerWidth <= 750) {
      Items = <Fragment>
        < PortfolioItem number={1} image={'portfolio-1'} type='.jpg' href='#' />
        < PortfolioItem number={2} image={'portfolio-2'} type='.jpg' href='https://that.im/' />
        < PortfolioItem number={3} image={'portfolio-3'} type='.jpg' href='https://inislam.net/' />
        < PortfolioItem number={4} image={'portfolio-4'} type='.jpg' content='false' />
      </Fragment>
    } else {
      Items = <Fragment>
        < PortfolioItem number={2} image={'portfolio-2'} type='.jpg' href='https://that.im/' />
        < PortfolioItem number={4} image={'portfolio-4'} type='.jpg' content='false' />
        < PortfolioItem number={1} image={'portfolio-1'} type='.jpg' href='#' />
        < PortfolioItem number={3} image={'portfolio-3'} type='.jpg' href='https://inislam.net/' />
      </Fragment>
    }

    setPortfolioItems(Items)
    setLoading(false)
  }


  if (loading) {
    return <Preloader />
  } else {
    return (
      <div id="portfolio" className='portfolio'>

        <h1 className="portfolio_title"> Portfolio </h1>
        <p className="portfolio_subtitle">UI-UX design website and App programming</p>

        {portfolioItems}

      </div>
    )
  }

};

export default Portfolio;



