import React, { useContext } from "react";
import logo from "../../media/svg/logos/logo.svg";
import logoMobile from "../../media/svg/logos/logo_mobile.svg";

import NavContext from "../nav/context/navContext";

import {NAV_LOCA} from '../../localization/de/Language';

const Logo = () => {

  const navContext =useContext(NavContext);
  const{isMobile}=navContext;

  return (
    <a href='/' className='logo'>
       <img src={isMobile? logoMobile :logo } alt="niceTwice logo" />
      { !isMobile && <h5 className='slogan'>{NAV_LOCA.slogan}</h5>}
    </a >
  );
};

export default Logo;

