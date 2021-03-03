import React from 'react';

import Icon from '../../../assets/images/Økonomi_og administration.svg';
import classes from './ServiceIcon.module.css';

const logo = (props) => {
    return (
    <div className={classes.Icon}>
            <img src={Icon} alt="OKONOMI Icon" />
            <p style={{marginTop:'0.5rem', fontWeight:'bold'}}>ØKONOMI & ADMINISTRATION</p>
    </div>
    )
};

export default logo;