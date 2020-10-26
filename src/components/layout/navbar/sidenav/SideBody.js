import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import NavContext from '../../../../context/nav/navContext';
import { SidebarDataHome, SidebarDataBlog } from '../sidenav/SidebarData'
import Login from '../../../auth/Login'

function SideBody() {
    const navContext = useContext(NavContext)
    const { showSidebar, sidebarItem, setCurrentNav, currentNav } = navContext;

    let location = useLocation().pathname == '/'

    let SidebarData = currentNav == 'home' || location ? SidebarDataHome : SidebarDataBlog;
    let navContent

    switch (sidebarItem) {
        case 'login':
            navContent = <Login />
            break;
        default:
            navContent = (
                SidebarData.map((nav) => {
                    if (nav.path.includes('#')) {
                        return <AnchorLink href={nav.path} onClick={showSidebar}>{nav.title}</AnchorLink>
                    } else {
                        return <Link to={nav.path} onClick={(nav.path == '/blog' ? () => { showSidebar(); setCurrentNav('blog') } : () => { showSidebar(); setCurrentNav('home') })}>{nav.title}</Link>
                    }
                })
            )
            break;
    }

    return (
        <nav >
            {navContent}
        </nav>
    )
}

export default SideBody
