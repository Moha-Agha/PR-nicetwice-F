import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./scss/App.scss";


import Preloader from './components/layout/Preloader';

import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';

import PageNotFound from './components/layout/errorPages/PageNotFound';
import BlogOffline from './components/layout/errorPages/BlogOffline';

import ContactUs from './components/contacts/Contacts';
import Messages from './components/messages/Messages';

import Blog from './components/blog/Blog';
import Section from './components/blog/section/Section';
import Article from './components/blog/article/Article';

import Alerts from './components/layout/Alerts';
import ScrollToTopButton from './components/uiElements/button/ScrollToTopButton';

import PrivateRoute from './components/routing/PrivateRoute';

import ContactState from './context/contact/ContactState';
import MessagetState from './context/message/MessagetState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import NavState from './context/nav/NavState';



const App = () => {

  const [loading, setLoading] = useState(false)


  useEffect(() => {
    // window.addEventListener('load', () => {
    //   setLoading(true);
    // });
    setLoading(true);
  })

  return (

    <> { loading ?
      (<>
        <AuthState>
          <ContactState>
            <MessagetState>
              <AlertState>
                <NavState>
                  <Router>
                    <ScrollToTopButton />
                    <div className="container">
                      <Navbar />
                    </div>
                    <Alerts />
                    <Switch>
                      {/* <Route exact path='/' component={Home} /> */}
                      <Route exact path='/' component={Blog} />
                      <Route exact path='/section/:name' component={BlogOffline} />
                      <Route exact path='/article/:id' component={BlogOffline} />
                      <Route exact path='/contact' component={ContactUs} />
                      <PrivateRoute exact path='/messages' component={Messages} />
                      <Route path='*' component={PageNotFound} />
                    </Switch>
                    <div className="container">
                      <Footer />
                    </div>
                  </Router>
                </NavState>
              </AlertState>
            </MessagetState>
          </ContactState>
        </AuthState>
      </>)
      : <Preloader />}
    </>


  );
};

export default App;
