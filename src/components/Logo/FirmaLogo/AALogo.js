import React from 'react';


import Logo from '../../../assets/images/AA_logo.svg';
import classes from './FirmaLogo.module.css';

const logo = (props) => {
    return (
    <div className={classes.Logo}>
            <img src={Logo} alt="Alex Andersen Logo" />
    </div>
    )
};

export default logo;