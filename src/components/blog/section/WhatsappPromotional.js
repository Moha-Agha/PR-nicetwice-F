import React from "react";
import SecondaryButton from "../../uiElements/button/SecondaryButton"

const WhatsappPromotional = () => {
  return (
    <div className="whatsapp-promotional">
      <h2>
        WhatsApp-Newsletter
      </h2>
      <p>
        Registriere dich jetzt und bleib immer auf dem Laufenden.
      </p>
      <SecondaryButton title='Join us' />
      <a href="" className="sub-link">
        Newsletter abmelden
      </a>
    </div>
  );
};

export default WhatsappPromotional;
