import React,{useContext} from 'react';
import {HOME_LOCA} from '../../localization/de/Language';

import NavContext from '../../shared/nav/context/navContext';

import Hero from './components/hero/Hero';
import Card from '../../shared/card/Card';
import WorkProcess from './components/workProcess/WorkProcess';
import MoreBlogs from './components/moreBlogs/MoreBlogs';

//card image
import portfolioCard from '../../media/image/portfolio.png';
import servicesCard from '../../media/image/services.png';


import UiLoading from "../../shared/uiLoading/UiLoading";


const Home = () => {

  const navContext = useContext(NavContext);
  const{ isMobile }= navContext;

      return (
        <UiLoading>
        <div className="container">
           <Hero title={HOME_LOCA.heroTitle} subtitle={HOME_LOCA.herosutitle}/>
        </div>
        
        <div className="container">
            <div className="cards">
            <Card
            image={portfolioCard}
            title={HOME_LOCA.portfolioCardTitle}
            subtitle={HOME_LOCA.portfolioCardSutitle}
            slug={'portfolio'}/>
            <Card
            image={servicesCard}
            title={HOME_LOCA.servicesCardTitle}
            subtitle={HOME_LOCA.servicesCardSutitle}
            slug={'service'}/>
            </div>
        </div>
        
            <WorkProcess
            title={HOME_LOCA.workProcessTitle}
            subtitle={HOME_LOCA.workProcessSubtitle}
            isMobile={isMobile}/>
            <MoreBlogs
            title={HOME_LOCA.moreBlogsTitle}
            subtitle={HOME_LOCA.moreBlogsSubtitle}
            isMobile={isMobile}/>
        
        </UiLoading>
    )
}

export default Home

