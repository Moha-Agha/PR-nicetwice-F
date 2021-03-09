import React from 'react';
import {SCREEN_SUPPORT_LOCA} from '../../../localization/de/Language';

const ScreenSupport = () => {
    return (
        <div className="container screen-support">
        {SCREEN_SUPPORT_LOCA.MobileNotAvailable}
        </div>
    )
}

export default ScreenSupport
