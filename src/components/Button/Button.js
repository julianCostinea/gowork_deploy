import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
    let buttonClasses = [classes.Button]
    if (props.whiteButton) {
        buttonClasses = [classes.Button, classes.whiteButton];
    }
    return (
        <button className={buttonClasses.join(' ')}>
            {props.buttonText}
        </button>
    )
};

export default Button;