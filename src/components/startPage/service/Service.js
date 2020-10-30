import React, { useEffect, useState } from "react";

import { ServiceData } from "./ServiceData"
import ServiceItem from "./ServiceItem"

const Service = () => {

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
      </div>

    </div>
  )

};

export default Service;



