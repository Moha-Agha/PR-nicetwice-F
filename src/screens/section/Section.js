import React, { useState, useContext, useRef } from "react";

import SectionContext from './context/sectionContext';

// import ArticleMotivator from "../ArticleMotivator";

import HeaderOfSection from "./components/HeaderOfSection";
import BackTo from "../../shared/button/BackTo";

import BlogCard from "../../shared/blogCard/BlogCard";

import Preloader from "../../shared/preloader/Preloader";

const Section = (props) => {

  const sectionContext = useContext(SectionContext);
  const { getSection, section } = sectionContext;

  const [width, setWidth] = useState();
  const [uiLoding, setUiLoding] = useState(false);

  var sectionTitle;
  // runs only once before rendering the component.
  const willMount = useRef(true);
  if (willMount.current) {
    window.scrollTo(0, 0);
    
    let spl = props.location.pathname.split('/');
    let res = spl[2]
    getSection(res)

    setWidth(window.innerWidth);

    //loading ui
    setTimeout(() => {
      setUiLoding(true)
    }, 800);

    willMount.current = false;
  }



  if (!uiLoding) {
    return <Preloader />
  } else if (section !== null) {
    sectionTitle=section[0].title
    return (<>
      <div className='container'>
        <BackTo to='/' title='Zurück zum Home' />
        <HeaderOfSection sectionInfo={section[0]} />
      </div>

      <div className={width > 700 ? 'container' : null}>

      <div className="articles">
            {section[1].slice(0, 6).map(({
              _id,
              slug,
              title,
              heroImage
            }) => {
              return ( 
                 <BlogCard
                   key={_id}
                   id={_id}
                   slug={slug}
                   section={sectionTitle}
                   title={title}
                   heroImage={heroImage}
                 />
              )
            })}
        </div>

        {/* <Pagination /> */}
      </div>
    </>)
  } else { return <Preloader /> }


};

export default Section;
