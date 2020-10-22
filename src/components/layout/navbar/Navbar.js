import React, { useRef } from 'react';


import Logo from '../../uiElements/Logo'
import Sidenav from './Sidenav'
import SidenavSearch from './SidenavSearch'

const Navbar = () => {

  const searchRef = useRef();
  const menuRef = useRef();


  return (
    <nav >

      <Sidenav ref={menuRef} />
      <SidenavSearch ref={searchRef} />

      <div className="navbar" >
        <Logo logo='nicetwice_logo' type='.png' />
      </div>

      <div className="navbar_items">
        <div className="icon-circle" onClick={() => searchRef.current.openNav()}><i className="aicon-search"></i></div>
        <div className="icon-circle" onClick={() => menuRef.current.openNav()}><i className="aicon-menu"></i></div>
      </div>

    </nav >
  );
};


export default Navbar;
