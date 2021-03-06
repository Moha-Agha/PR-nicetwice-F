import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import NavContext from '../nav/context/navContext';

import {FOOTER_LOCA} from '../../localization/de/Language';

import contactUsCard from '../../media/image/contact_us_card.png';

const Footer = () => {

    const navContext = useContext(NavContext)
    const{isMobile}=navContext;

    return (
        <footer className={isMobile ? ' ':'container '}>
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
                <div>
                    <a href='/privacy'>{FOOTER_LOCA.privacyPolicy}</a>
                    - <a href='/'>{FOOTER_LOCA.sitemap}</a>
                    - <a href='/conditions'>{FOOTER_LOCA.termsAndConditions}</a>
                    - <a href='/imprint'>{FOOTER_LOCA.Imprint}</a></div>
                <div><span role="img" aria-label="Copywriting">©️</span> 2020-2021 nicetwice.de</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
