import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import NavContext from '../../../../context/nav/navContext';
import AuthContext from '../../../../context/auth/authContext';

import { SidebarData } from '../sidenav/SidebarData'
import Login from '../../../auth/Login'

function SideBody() {
    const navContext = useContext(NavContext)
    const { showSidebar, sidebarItem, setCurrentNav, currentNav } = navContext;

    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;

    let location = useLocation().pathname === '/'

    const SidebarDataHome = currentNav === 'home' || location ? true : false

    let navContent

    switch (sidebarItem) {
        case 'login':
            navContent = <Login />
            break;
        default:
            navContent = (
                SidebarData.map((nav) => {
                    if (nav.path.includes('#')) {
                        return SidebarDataHome ? <AnchorLink href={nav.path} key={nav.path} onClick={showSidebar}>{nav.title}</AnchorLink> : null
                    } else {
                        return <Link to={nav.path} key={nav.path} onClick={(nav.path !== '/' ? () => { showSidebar(); setCurrentNav('other') } : () => { showSidebar(); setCurrentNav('home') })}>{nav.title}</Link>
                    }
                })
            )
            break;
    }

    return (
        <nav >
            {navContent}
            {isAuthenticated ? <Link to='/Messages'>Message</Link> : null}
        </nav>
    )
}

export default SideBody
