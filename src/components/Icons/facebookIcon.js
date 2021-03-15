import React from 'react';

import facebookIcon from '../../assets/images/facebook.svg';
import classes from './Icon.module.css';


const icon = () => (
    <div className={classes.Icon}>
        <a href="https://www.facebook.com/goworkodense/" target='_blank' rel="noreferrer">
            <img style={{}} src={facebookIcon} alt="facebook Icon"/>
        </a>
    </div>
);

export default icon;