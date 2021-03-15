import React from 'react';


import Logo from '../../../assets/images/RUC_logo.svg';
import classes from './FirmaLogo.module.css';

const logo = () => {
    return (
    <div className={`${classes.Logo} ${classes.RUCLogo}`}>
            <img src={Logo} alt="Roskilde Universitet Logo" />
    </div>
    )
};

export default logo;