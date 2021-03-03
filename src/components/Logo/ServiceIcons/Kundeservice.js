import React from 'react';

import Icon from '../../../assets/images/support.svg';
import classes from './ServiceIcon.module.css';

const logo = (props) => {
    return (
    <div className={classes.Icon}>
            <img src={Icon} alt="Kundeservice Icon" />
            <p style={{marginTop:'0.5rem', fontWeight:'bold'}}>SALG & KUNDESERVICE</p>
    </div>
    )
};

export default logo;