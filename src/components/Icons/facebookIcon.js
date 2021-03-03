import React from 'react';

import facebookIcon from '../../assets/images/facebook.png';
import classes from './Icon.module.css';


const icon = (props) => (
    <div className={classes.Icon}>
        <a href={props.link} target='_blank'>
            <img src={facebookIcon} alt="facebook Icon"/>
        </a>
    </div>
);

export default icon;