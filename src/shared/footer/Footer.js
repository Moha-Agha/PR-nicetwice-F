import React from 'react';
import {Link} from 'react-router-dom';
import {FOOTER_LOCA} from '../../localization/de/Language';

import contactUsCard from '../../media/image/contact_us_card.png';

const Footer = () => {

    return (
        <footer className='container '>
            <div className='footer'>
                <Link to={'/contact'} className='footer_contact-us-card'>
                <div className='footer_contact-us-card_imag'>
                    <img  src={contactUsCard} alt="contact us card" />
                  </div>  
                    <div className='footer_contact-us-card_text'>
                        <div className='footer_contact-us-card_text-title'>{FOOTER_LOCA.contactCardTitle} </div>
                        <div className='footer_contact-us-card_text-subtitle'>
                            {FOOTER_LOCA.contactCardSubtitle1}
                            <span> {FOOTER_LOCA.contactCardSubtitle2} </span>
                            {FOOTER_LOCA.contactCardSubtitle3}
                        </div>
                    </div>

                </Link>

                <div className='footer_info'>
                <div>{FOOTER_LOCA.privacyPolicy} - {FOOTER_LOCA.sitemap} - {FOOTER_LOCA.termsAndConditions} - {FOOTER_LOCA.Imprint}</div>
                <div><span role="img" aria-label="Copywriting">©️</span> 2020-2021 nicetwice.de</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
