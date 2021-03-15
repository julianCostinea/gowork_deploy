import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../../assets/images/support.svg';
import classes from './ServiceIcon.module.css';

const logo = (props) => {
    return (
    <Link to={'/virksomheder/salg'}>
        <div className={classes.Icon}>
                <img src={Icon} alt="Kundeservice Icon" />
                <p style={{marginTop:'0.5rem', fontWeight:'bold'}}>SALG & KUNDESERVICE</p>
        </div>
    </Link>
    )
};

export default logo;