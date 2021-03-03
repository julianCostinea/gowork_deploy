import React from 'react';

import linkedInIcon from '../../assets/images/linkedin.png';
import classes from './Icon.module.css';


const icon = (props) => (
    <div className={classes.Icon}>
        <a href={props.link} target='_blank'>
            <img src={linkedInIcon} alt="linkedIn Icon"/>
        </a>
    </div>
);

export default icon;