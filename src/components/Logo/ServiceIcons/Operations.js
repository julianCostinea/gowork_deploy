import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../../assets/images/Operations.svg';
import classes from './ServiceIcon.module.css';

const logo = (props) => {
    return (
    <Link to={'/virksomheder/lager'}>
        <div className={classes.Icon}>
                <img src={Icon} alt="OPERATIONS Icon" />
                <p style={{marginTop:'0.5rem', fontWeight:'bold'}}>LAGER & PRODUKTION</p>
        </div>
    </Link>
    )
};

export default logo;