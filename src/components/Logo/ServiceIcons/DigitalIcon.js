import React from 'react';

import Icon from '../../../assets/images/Kreativ.svg';
import classes from './ServiceIcon.module.css';

const logo = (props) => {
    return (
    <div className={classes.Icon}>
            <img src={Icon} alt="Digital & Kreativ Icon" />
            <p style={{marginTop:'0.5rem', fontWeight:'bold'}}>DIGITALT & KREATIVT</p>
    </div>
    )
};

export default logo;