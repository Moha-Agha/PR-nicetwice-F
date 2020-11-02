import React, { useContext } from "react";
import { Link } from 'react-router-dom';

import NavContext from '../../../context/nav/navContext';

const FooterRedirection = () => {
  const navContext = useContext(NavContext)
  const { currentNav, setCurrentNav } = navContext;



  return (
    <div className="redirection-footer">

      {currentNav === 'home' ?
        <>
          <h1>
            Na, zurück zur
          </h1>
          <Link to='/' onClick={() => { setCurrentNav('contact') }} ><h1>Homepage?</h1></Link>
        </>
        :
        <>
          <h1>
            Na, möchtest du uns
          </h1>
          <Link to='/contact' onClick={() => { setCurrentNav('home') }}><h1>kontaktieren?</h1></Link>
        </>
      }


    </div>
  );
};

export default FooterRedirection;


