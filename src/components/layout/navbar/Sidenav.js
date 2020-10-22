import React, { forwardRef, useRef, useImperativeHandle, Fragment, useContext, useEffect, useState } from "react";

import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';
import ContactContext from '../../../context/contact/contactContext';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Login from '../../auth/Login'
import Register from '../../auth/Register'


const Sidenav = forwardRef((props, ref) => {

    const [viewitem, setViewitem] = useState();

    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);

    const { isAuthenticated, logout, user, loadUser } = authContext;
    const { clearContacts } = contactContext;

    const SidenavDiv = useRef(null);

    let navContent;

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    const onLogout = () => {
        logout();
        clearContacts();
    };

    const authLinks = (
        <Fragment>
            <a>Hello {user && user.name}</a> /
            <a onClick={onLogout} href='#!'>
                <i className='fas fa-sign-out-alt' />{' '}
                <span className='hide-sm'>Logout</span>
            </a>
        </Fragment>
    );

    const adminLinks = (
        <Fragment>
            <Link to='/messages'>Messages</Link>
        </Fragment>
    );
    const guestLinks = (
        <Fragment>
            <a onClick={() => { setViewitem('login') }}>Einloggen</a> / <a onClick={() => { setViewitem('register') }}>Registrieren</a>
        </Fragment>
    );

    const backToMenu = () => {
        setViewitem("menu");
    }

    useImperativeHandle(ref, () => ({
        openNav() {
            SidenavDiv.current.classList.add("sidenavOpen");
        }
    }));

    const closeNav = () => {
        SidenavDiv.current.classList.remove("sidenavOpen");
    }

    switch (viewitem) {
        case 'login':
            navContent = <Login backToMenu={backToMenu} />
            break;
        case 'register':
            navContent = <Register backToMenu={backToMenu} />
            break;
        default:
            navContent = (
                <Fragment>
                    <Link to='/'>Home</Link>
                    <a href="#">Portfolio</a>
                    <a href="#">Service</a>
                    <a href="#">Kontakt</a>
                    <a href="#">Blog</a>
                    {isAuthenticated ? adminLinks : null}
                </Fragment>)
            break;
    }


    return (
        <div ref={SidenavDiv} className="sidenav">
            <div className="sidenav_head">
                {isAuthenticated ? authLinks : guestLinks}
                <div className="icon-circle" onClick={() => { closeNav() }}><i className="aicon-x"></i></div>
            </div>
            <div className="sidenav_line" />
            <TransitionGroup component={null}>
                <CSSTransition
                    timeout={500}
                    classNames='item'
                >
                    {navContent}
                </CSSTransition>
            </TransitionGroup>

        </div >
    )

});


export default Sidenav;
