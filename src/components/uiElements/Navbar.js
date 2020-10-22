import React from "react";


import Logo from './Logo'

const Navbar = () => {

  return (
    <nav >
      <div className="navbar" >
        <Logo logo='nicetwice_logo' type='.png' />
      </div>

      <div className="navbar_items">
        <div className="icon-circle"><i className="aicon-search"></i></div>
        <div className="icon-circle"><i className="aicon-menu"></i></div>
      </div>

    </nav >
  );
};


export default Navbar;
