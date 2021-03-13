import React, { useEffect, useState } from "react";

import BackTo from "../../../shared/button/BackTo";

const Conditions = () => {

  const [width, setWidth] = useState()

  useEffect(() => {
    window.scrollTo(0, 0);
    setWidth(window.innerWidth);
  }, []);


  return (
    <div id="service" >
      <div className="container">
        <BackTo to='/' title='Zurück zum Home' />
        <h1 className="service_title"> AGB </h1>
      </div>

      <div className={width > 700 ? 'service container' : 'service'}>

      </div>

    </div >
  )

};

export default Conditions;



