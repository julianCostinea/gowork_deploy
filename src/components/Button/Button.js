import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.module.css';

const Button = (props) => {
    let buttonClasses = [classes.Button]
    if (props.whiteButton) {
        buttonClasses = [classes.Button, classes.whiteButton];
    }

    return (
        <Link to = {props.buttonLink}>
        <button 
            className={buttonClasses.join(' ')}>
            {props.buttonText}
        </button>
        </Link>
    )
};

export default Button;