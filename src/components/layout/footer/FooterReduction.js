import React, { useContext } from "react";
import { Link } from 'react-router-dom';

import NavContext from '../../../context/nav/navContext';

const FooterReduction = () => {
  const navContext = useContext(NavContext)
  const { currentNav, setCurrentNav } = navContext;

  return (
    <div className="reduction-footer">

      {currentNav === 'blog' ?
        <>
          <h1>
            zurück zur Homepage
    </h1>
          <Link className='reduction-footer_arrow' to='/' onClick={() => { setCurrentNav('home') }} ><i className='aicon-right-arrow'></i></Link>
        </>
        :
        <>
          <h1>
            Na, möchtest
            du unseren Blog besuchen?
   </h1>
          <Link className='reduction-footer_arrow' to='/blog' onClick={() => { setCurrentNav('blog') }}><i className='aicon-right-arrow'></i></Link>
        </>
      }


    </div>
  );
};

export default FooterReduction;


