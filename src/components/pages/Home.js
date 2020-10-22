import React, { Fragment } from 'react';

import Alerts from '../layout/Alerts';

import SocialMedia from '../uiElements/SocialMedia';
import MessengerIcon from '../uiElements/MessengerIcon';
import Portfolio from '../portfolio/Portfolio';
import ContactUs from '../contactUs/ContactUs';
import Footer from '../uiElements/footer/Footer';

const Home = () => {
  return (
    <Fragment>

      <Alerts />

      <h1 className="title">
        Wir helfen Businesses <br />
        ins Auge zu fallen
      </h1>

      <p className="description">
        durch die Erstellung beeindruckender <span >Logos</span> und <span >Websites</span>.
      </p>


      <div className="home-footer">
        <SocialMedia />
        <MessengerIcon mobile='show' />
      </div>

      <Portfolio />
      <ContactUs />
      <Footer />

    </Fragment>
  );
};

export default Home;
