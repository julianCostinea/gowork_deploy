import React from 'react';


import Logo from '../../../assets/images/Harald_Nyborg.svg';
import classes from './FirmaLogo.module.css';

const logo = () => {
    return (
    <div className={classes.Logo}>
            <img src={Logo} alt="Harald Nyborg Logo" />
    </div>
    )
};

export default logo;