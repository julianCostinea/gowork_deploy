import React from 'react';

import Icon from '../../../assets/images/Operations.svg';
import classes from './ServiceIcon.module.css';

const logo = (props) => {
    return (
    <div className={classes.Icon}>
            <img src={Icon} alt="OPERATIONS Icon" />
            <p style={{marginTop:'0.5rem', fontWeight:'bold'}}>LAGER & PRODUKTION</p>
    </div>
    )
};

export default logo;