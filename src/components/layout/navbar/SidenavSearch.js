import React, { forwardRef, useRef, useImperativeHandle, Fragment, useContext, useEffect } from "react";

import { Link } from 'react-router-dom';


const SidenavSearch = forwardRef((props, ref) => {

    const SidenavDiv = useRef(null);


    const closeNav = () => {
        SidenavDiv.current.classList.remove("sidenavOpen");
    }

    useImperativeHandle(ref, () => ({

        openNav() {
            SidenavDiv.current.classList.add("sidenavOpen");
        }

    }));

    return (
        <div ref={SidenavDiv} className="sidenav">
            <div className="sidenav_head">
                <a>Auf nicetwice.de suchen</a>
                <div className="icon-circle" onClick={() => { closeNav() }}><i className="aicon-x"></i></div>
            </div>


            {/* <div className="news-letter_form">
                <input type="text" id="fname" name="fname" placeholder="search" />
                <button type="button"><i className="aicon-search"></i></button>
            </div> */}

            <form className="search-input" onsubmit="event.preventDefault();" role="search">
                <input id="search" type="search" placeholder="Search..." autofocus required />
                <button type="submit"><i className="aicon-search"></i></button>
            </form>

        </div >
    );
});


export default SidenavSearch;
