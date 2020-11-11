import React from "react";
import PremiumButton from "../../uiElements/button/PremiumButton"

const WhatsappPromotional = () => {
  return (
    <div className="whatsapp-promotional">
      <h2>
        WhatsApp-Newsletter
      </h2>
      <p>
        Registriere dich jetzt und bleib immer auf dem Laufenden.
      </p>
      <PremiumButton title='Join WhatsApp-Newsletter' />
      <a href="" className="sub-link">
        Newsletter abmelden
      </a>
    </div>
  );
};

export default WhatsappPromotional;
