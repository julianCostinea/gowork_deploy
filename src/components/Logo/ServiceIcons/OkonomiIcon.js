import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../../assets/images/Økonomi_og administration.svg';
import classes from './ServiceIcon.module.css';

const logo = (props) => {
    return (
    <Link to={'virksomheder/okonomi'}>
    <div className={classes.Icon}>
            <img src={Icon} alt="OKONOMI Icon" />
            <p style={{marginTop:'0.5rem', fontWeight:'bold'}}>HR & ØKONOMI</p>
    </div>
    </Link>
    )
};

export default logo;