import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./scss/App.scss";

import Navbar from './components/layout/navbar/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Messages from './components/messages/Messages';

import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

import ContactState from './context/contact/ContactState';
import MessagetState from './context/message/MessagetState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';


const App = () => {
  return (
    <AuthState>
      <ContactState>
        <MessagetState>
          <AlertState>
            <Router>
              <div className="container">
                <Navbar />

                <Alerts />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <PrivateRoute exact path='/messages' component={Messages} />
                  <Route path='*' component={About} />
                </Switch>

              </div>
            </Router>
          </AlertState>
        </MessagetState>
      </ContactState>
    </AuthState>
  );
};

export default App;
