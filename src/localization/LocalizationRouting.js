import React from 'react'
import {Language as ArLanguage} from './ar/Language';
import {Language as DeLanguage} from './de/Language';


export const LocalizationRouting = () => {

    //set default localization
    let localization = localStorage.getItem('Language') || 'AR';

    //select localization resources 
    switch (localization) {
        case 'DE':
            return <DeLanguage/>
            break;
        default:
              return <ArLanguage/>
            break;
    }
}

export const LocalizationChange = (Language) => {
    localStorage.setItem('Language', Language)
}

 
