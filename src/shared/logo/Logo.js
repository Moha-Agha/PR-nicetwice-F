import React from "react";
import logo from "../../media/image/nicetwice_logo.png";

import {NAV_LOCA} from '../../localization/de/Language';

const Logo = () => {

  return (
    <a href='/' className='logo'>
       <img src={logo} alt="niceTwice logo" /> 
      <h5>{NAV_LOCA.slogan}</h5>
    </a >
  );
};

export default Logo;
