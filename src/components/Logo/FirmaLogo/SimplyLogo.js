import React from 'react';


import Logo from '../../../assets/images/Simply_logo.svg';
import classes from './Simply.module.css';

const logo = () => {
    return (
    <div className={classes.Logo}>
            <img src={Logo} alt="Simply Chocolate Logo" />
    </div>
    )
};

export default logo;