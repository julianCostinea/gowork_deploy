import React from 'react';


import Logo from '../../../assets/images/valeuer_logo.svg';
import classes from './FirmaLogo.module.css';

const logo = () => {
    return (
    <div className={classes.Logo}>
            <img src={Logo} alt="Valeur Logo" />
    </div>
    )
};

export default logo;