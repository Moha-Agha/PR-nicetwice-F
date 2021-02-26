import React, { useContext } from 'react';
import NavContext from './context/navContext';

import Sidenav from './components/sidenav/Sidenav';
import Logo from '../logo/Logo';

const Nav = () => {

    const navContext = useContext(NavContext)
    const { showSidebar, setSidebarSection } = navContext;

    return (
        <nav id="nav" className="container">
            <Sidenav />
            <div className='nav_logo'><Logo/></div>
            <div className='nav_items'>
                <li onClick={showSidebar}><i className="material-icons md-24">menu</i></li>
                <li  onClick={() => { setSidebarSection('search'); showSidebar() }}><i className="material-icons md-24">search</i></li> 
                {/* <li className="nav_items-lang"><i >{NAV_LOCA.lang}</i></li>  */}
            </div>
        </nav>
    )
}

export default Nav
