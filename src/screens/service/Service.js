import React, { useEffect, useState } from "react";

import { ServiceData } from "./components/ServiceData";
import ServiceItem from "./components/ServiceItem";
import BackTo from "../../shared/button/BackTo";

import UiLoading from "../../shared/uiLoading/UiLoading";

const Service = () => {

  const [width, setWidth] = useState()

  useEffect(() => {
     window.scrollTo(0, 0);
    setWidth(window.innerWidth);
  }, []);


  return (
    <UiLoading>
    <div id="service" >
      <div className="container">
        <BackTo to='/' title='Zurück zum Home' />
        <h1 className="service_title"> Service</h1>
        <p className="service_subtitle">Modernste Technologie und Startup freundliche Atmosphäre</p>
      </div>

      <div className={width > 700 ? 'service container' : 'service'}>
        <div className='services'>
          {ServiceData.map(({ color,icon, title, price, notic, time }) => {
            return < ServiceItem key={title} color={color} icon={icon} title={title} price={price} notic={notic} time={time} />
          })}
        </div>

        {/* <div className='service-notic'>
          Bist du Startup-Unternehmer/in und die Kosten sind für dich zu hoch? <Link to="/contact" onClick={() => { setCurrentNav('home') }}>Schreib uns eine Nachricht!</Link>
        </div> */}

      </div>

    </div >
    </UiLoading>
  )

};

export default Service;