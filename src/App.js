import React from 'react';
import "./theme/App.scss";

//context
import AlertState from './shared/alert/AlertState';
import AuthState from './admin/auth/context/AuthState';
import NavState from './shared/nav/context/NavState';
import SectionState from './screens/section/context/SectionState';
import ArticleState from './screens/article/context/ArticleState';
import ContactState from './screens/contact/context/ContactState';

import Routing from './routing/Routing';

const App = () => {

  return (<>
  <AlertState>
    <AuthState>
      <NavState>
          <SectionState>
            <ArticleState>
              <ContactState>
                    
                    <Routing/>

              </ContactState>
            </ArticleState>
          </SectionState>
      </NavState>
    </AuthState>
  </AlertState>
  </>);   
};

export default App;
