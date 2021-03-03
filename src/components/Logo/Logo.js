import React from 'react';
import { NavLink } from 'react-router-dom';


import goworkLogo from '../../assets/images/NYlogo250px.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <NavLink to={'/'} onClick = {props.clicked}>
            <img src={goworkLogo} alt="GO:WORK ApS" />
        </NavLink> 
    </div>
);

export default logo;