import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
    let buttonClasses = [classes.Button, classes.orangeButton];

    return (
        <button 
            onClick = {props.openKontakt}
            className={buttonClasses.join(' ')}>
            START HER
        </button>
    )
};

export default Button;