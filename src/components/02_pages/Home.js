import React, { useState, useEffect, Fragment } from "react";

import ScrollInfo from "../01_uiElements/ScrollInfo"
import SocialMedia from "../01_uiElements/SocialMedia"
import Portfolio from "../01_uiElements/portfolio/Portfolio"
import ContactUs from "../01_uiElements/ContactUs"
import Footer from "../01_uiElements/footer/Footer"


const Home = () => {

  return (
    <Fragment>

      <h1 className="title">
        Wir helfen Businesses <br />
          ins Auge zu fallen
        </h1>

      <p className="description">
        durch die Erstellung beeindruckender <span >Logos</span> und <span >Websites</span>.
        </p>


      <div className="home-footer">
        <SocialMedia />
        <ScrollInfo mobile='show' />
      </div>

      <Portfolio />
      <ContactUs />
      <Footer />

    </Fragment>
  );


};

export default Home;



