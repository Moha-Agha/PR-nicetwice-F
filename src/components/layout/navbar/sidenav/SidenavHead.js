import React, { useContext, useEffect } from 'react'

import NavContext from '../../../../context/nav/navContext';
import AuthContext from '../../../../context/auth/authContext';

function SidenavHead() {

    const navContext = useContext(NavContext)
    const { showSidebar, setSidebarItem, setCurrentNav } = navContext;

    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, user, loadUser } = authContext;

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    const onLogout = () => {
        logout();
        setCurrentNav('home')
    };

    const authLinks = (
        <>
            <span>Hello {user && user.name}</span> /
            <a onClick={onLogout} href='#!'>
                <i className='fas fa-sign-out-alt' />{' '}
                <span className='hide-sm'>Logout</span>
            </a>
        </>
    );
    const guestLinks = (
        <>
            <span onClick={() => { setSidebarItem('login'); }}>Einloggen</span> / <span onClick={() => { }} className="disable-link">Registrieren</span>
        </>
    );
    return (
        <div className="sidenav_head">
            {isAuthenticated ? authLinks : guestLinks}
            <div className="icon-circle" onClick={() => { showSidebar(); setTimeout(() => { setSidebarItem('menu') }, 800) }}><i className="aicon-x"></i></div>
        </div>
    )
}

export default SidenavHead
