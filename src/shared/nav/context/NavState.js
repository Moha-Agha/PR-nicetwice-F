import React, { useReducer, useEffect } from 'react';
import NavContext from './navContext';
import navReducer from './navReducer';
import {
  SHOW_NAV_SIDEBAR,
  SET_NAV_SIDEBAR_ITEM,
  SET_NAV_SIDEBAR_SECTION,
  SET_NAV_CURRENT,
  SET_NAV_MOBILE_SIZE,
  SET_NAV_DESKTOP_SIZE
} from './types';

const NavState = props => {
  const initialState = {
    sidebar: false,
    sidebarSection: 'home',
    sidebarItem: 'menu',
    isMobile: false,
    currentNav: ''
  };

  const [state, dispatch] = useReducer(navReducer, initialState);

  useEffect(() => {
    handleResizeScreen();
    window.addEventListener('resize', handleResizeScreen)
    // eslint-disable-next-line
  }, [state.isMobile]);

  //handle Resize Screen
  const handleResizeScreen = () => {
    if (window.innerWidth <= 750) {
      dispatch({
        type: SET_NAV_MOBILE_SIZE,
        payload: state.isMobile,

      });
    } else {
      dispatch({
        type: SET_NAV_DESKTOP_SIZE,
        payload: state.isMobile,
      });
    }
  }

  // open and close the sidenav
  const showSidebar = () => {
    state.sidebar = !state.sidebar;
    dispatch({
      type: SHOW_NAV_SIDEBAR,
      payload: state.sidebar,
    });
  }
  // change sidebar section
  const setSidebarSection = (section) => {
    state.sidebarSection = section;
    dispatch({
      type: SET_NAV_SIDEBAR_SECTION,
      payload: state.sidebarSection,
    });
  }
  // change sidebar item
  const setSidebarItem = (item) => {
    state.sidebarItem = item;
    dispatch({
      type: SET_NAV_SIDEBAR_ITEM,
      payload: state.sidebarItem,
    });
  }
  // set current nav
  const setCurrentNav = (current) => {
    state.currentNav = current;
    dispatch({
      type: SET_NAV_CURRENT,
      payload: state.currentNav,
    });
  }

  return (
    <NavContext.Provider
      value={{
        sidebar: state.sidebar,
        sidebarSection: state.sidebarSection,
        sidebarItem: state.sidebarItem,
        currentNav: state.currentNav,
        isMobile: state.isMobile,
        showSidebar,
        setSidebarSection,
        setSidebarItem,
        setCurrentNav,
        handleResizeScreen
      }}>
      {props.children}
    </NavContext.Provider>
  );
};

export default NavState;
