import React from 'react';


import Logo from '../../../assets/images/UCL.svg';
import classes from './SchoolLogos.module.css';

const logo = (props) => {
    return (
    <div className={classes.Logo}>
            <img src={Logo} alt="University College Lillebælt Logo" />
    </div>
    )
};

export default logo;