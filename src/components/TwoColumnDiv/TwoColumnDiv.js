import React from 'react';

import classes from './TwoColumnDiv.module.css';
import Button from '../Button/Button';

const TwoColumnDiv = (props) => {
    const button1 = <Button buttonText = {props.buttonText}/>;
    let button2 = null;
    if (props.button2Text) {
        button2 = <Button whiteButton buttonText = {props.button2Text}/>;
    }

    const formattedHeader = props.header.split('\n').map((str, index) => <h2 key={index}>{str}</h2>);
    return(
    <div className={classes.Container}>
        <div className={classes.TextDiv}>
            <div className={classes.Header}>
                {formattedHeader}
            </div>
            <div className={classes.Paragraph}>
                <p>{props.children}</p>
            </div> 
                {button1}
                {button2}
        </div>
        <div className={classes.ImageDiv}>
            {props.imageDiv}
        </div>
    </div>
    )
};

export default TwoColumnDiv;