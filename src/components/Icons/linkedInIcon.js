import React from 'react';

import linkedInIcon from '../../assets/images/linkedin.svg';
import classes from './Icon.module.css';


const icon = () => (
    <div className={classes.Icon}>
        <a href='https://dk.linkedin.com/company/go-work-aps' target='_blank' rel="noreferrer">
            <img src={linkedInIcon} alt="linkedIn Icon"/>
        </a>
    </div>
);

export default icon;