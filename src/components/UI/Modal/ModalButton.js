import React from 'react';

import classes from './Modal.module.css';

const Button = (props) => {
    return (
        <button className={classes.ModalButton}>
            {props.buttonText}
        </button>
    )
};

export default Button;