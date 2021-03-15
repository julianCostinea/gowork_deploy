import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Modal.module.css';

const Button = (props) => {
    return (
        <NavLink to={props.link}>
            <button onClick={props.modalClosed} className={classes.ModalButton}>
                {props.buttonText}
            </button>
        </NavLink>
    )
};

export default Button;