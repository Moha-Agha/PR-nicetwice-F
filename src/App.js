import React, { useEffect, useState } from 'react';

import "./scss/App.scss";

import Routing from './components/1_routing/Routing';
import Preloader from './components/0_1_layout/Preloader';

import ContactState from './context/contact/ContactState';
import MessagetState from './context/message/MessagetState';
import SectionState from './context/section/SectionState';
import ArticleState from './context/article/ArticleState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import ImageState from './context/image/ImageState';
import NavState from './context/nav/NavState';



const App = () => {

  const [loading, setLoading] = useState(false)


  useEffect(() => {
    window.addEventListener('load', () => {
      setLoading(true);
    });
  })

  return (

    <> { loading ?
      (<>
        <AuthState>
          <ContactState>
            <SectionState>
              <ArticleState>
                <AlertState>
                  <ImageState>
                    <NavState>

                      <MessagetState>
                        <Routing />
                      </MessagetState>

                    </NavState>
                  </ImageState>
                </AlertState>
              </ArticleState>
            </SectionState>
          </ContactState>
        </AuthState>
      </>)
      : <Preloader />}
    </>


  );
};

export default App;
