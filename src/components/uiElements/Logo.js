import React, { useState, useEffect } from "react";



const Logo = ({ logo = 'logo_nav', type = '.png' }) => {

  const [path, setPath] = useState('');

  useEffect(() => {
    resizeScreen();
    window.addEventListener('resize', resizeScreen)
  });

  function resizeScreen() {
    let fullPath

    if (window.innerWidth <= 750) {
      fullPath = require('../../media/image/' + logo + '_mobile' + type)
    } else {
      fullPath = require('../../media/image/' + logo + type);
    }

    setPath(fullPath)
  }


  return (
    <a href='/' className='logo'>
      {path ? <img src={path} alt="niceTwice logo" /> : <h2 className='logo-title'>niceTwice</h2>}
    </a >
  );
};

export default Logo;
