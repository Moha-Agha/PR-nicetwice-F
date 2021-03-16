import React from 'react';
import BackTo from "../../../shared/button/BackTo";

const PageNotFound = () => {
    return (
        <div className="container ">
            <BackTo to='/' title='Zurück zum Home' />
            <div className="page-not-found">
            <h1>Die Seite ist nicht vorhanden</h1>
            </div>
        </div>
    )
}

export default PageNotFound
