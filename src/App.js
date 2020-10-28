import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./scss/App.scss";

import Navbar from './components/layout/navbar/Navbar';
import Home from './components/pages/Home';
import Blog from './components/blog/Blog';
import Messages from './components/messages/Messages';
import Footer from './components/layout/footer/Footer';

import Alerts from './components/layout/Alerts';
import ScrollToTopButton from './components/uiElements/button/ScrollToTopButton';

import PrivateRoute from './components/routing/PrivateRoute';

import ContactState from './context/contact/ContactState';
import MessagetState from './context/message/MessagetState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import NavState from './context/nav/NavState';



const App = () => {
  return (
    <AuthState>
      <ContactState>
        <MessagetState>
          <AlertState>
            <NavState>
              <Router>
                <ScrollToTopButton />
                <div className="container">
                  <Navbar />

                  <Alerts />
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/blog' component={Blog} />
                    <PrivateRoute exact path='/messages' component={Messages} />
                    <Route path='*' component={Home} />
                  </Switch>

                  <Footer />
                </div>
              </Router>
            </NavState>
          </AlertState>
        </MessagetState>
      </ContactState>
    </AuthState>
  );
};

export default App;
