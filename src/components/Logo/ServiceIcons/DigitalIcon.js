import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../../assets/images/Kreativ.svg';
import classes from './ServiceIcon.module.css';

const logo = (props) => {
    return (
    <Link to={'/virksomheder/digitalt'}>
        <div className={classes.Icon}>
                <img src={Icon} alt="Digital & Kreativ Icon" />
                <p style={{marginTop:'0.5rem', fontWeight:'bold'}}>DIGITALT & KREATIVT</p>
        </div>
    </Link>
    )
};

export default logo;