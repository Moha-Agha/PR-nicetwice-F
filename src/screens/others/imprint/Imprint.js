import React, { useEffect } from "react";

import BackTo from "../../../shared/button/BackTo";

const Imprint = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div id="service" >
      <div className="container">
        <BackTo to='/' title='Zurück zum Home' />
        <h1 className="service_title"> Impressum</h1>
      </div>

      <div className='container'>

        <p>nicetwice.de Einzelunternehmen </p><br />
        <p>
          Zimmermannstraße 3,<br />
          21079 Hamburg<br />
          Germany
                <br />
              Kontakt
              Telefon: +49 [1]575 9026756
                <br />
                E-Mail: muha.agha[at]gmail.com
                <br />
                Internet: http://www.nicetwice.de
            </p>
        {/* <br /><h3>Rechtliche Angaben</h3><br />
        <p>

          psn media GmbH & Co. KG
          Geschäftsführer: Carsten Lange & Alexander Neschanjan
          Handelsregister: HRA 3289, Amtsgericht Rostock
          Steuernummer: 079/161/28600, Steuer-ID: DE280960673
          vertreten durch die Lange & Neschanjan GmbH
          diese wiederum einzeln vertreten durch die Geschäftsführer Herrn Carsten Lange & Herrn Alexander Neschanjan
            </p>
        <br />
        <h3> Persönlich haftende Gesellschafterin</h3>
        <br />
        <p>
          Lange & Neschanjan GmbH, Steinstraße 6, 18055 Rostock
          Geschäftsführer: Carsten Lange & Alexander Neschanjan
          Handelsregister: HRB 12116, Amtsgericht Rostock, Steuernummer: 079/113/01452, Steuer-ID: DE280960608
            </p> */}

      </div>

    </div >
  )

};

export default Imprint;



