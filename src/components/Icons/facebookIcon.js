import React from 'react';

import facebookIcon from '../../assets/images/facebook.svg';
import classes from './Icon.module.css';


const icon = (props) => (
    <div className={classes.Icon}>
        <a href="https://www.facebook.com/goworkodense/" target='_blank'>
            <img style={{}} src={facebookIcon} alt="facebook Icon"/>
        </a>
    </div>
);

export default icon;