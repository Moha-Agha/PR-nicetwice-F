import React, { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom'

import { ServiceData } from "./ServiceData"
import ServiceItem from "./ServiceItem"


import NavContext from '../../../context/nav/navContext';

const Service = () => {

  const navContext = useContext(NavContext)
  const { setCurrentNav } = navContext;

  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);


  return (
    <div id="service" >
      <div className="container">
        <h1 className="service_title"> Service </h1>
        <p className="service_subtitle">Modernste Technologie und Startup freundliche Atmosphäre</p>
      </div>

      <div className={width > 700 ? 'service container' : 'service'}>
        <div className='services'>
          {ServiceData.map(({ icon, title, price, notic, time }) => {
            return < ServiceItem key={title} icon={icon} title={title} price={price} notic={notic} time={time} />
          })}
        </div>

        <div className='service-notic'>
          Bist du Startup-Unternehmer/in und die Kosten sind für dich zu hoch? <Link to="/contact" onClick={() => { setCurrentNav('home') }}>Schreib uns eine Nachricht!</Link>
        </div>

      </div>

    </div >
  )

};

export default Service;



