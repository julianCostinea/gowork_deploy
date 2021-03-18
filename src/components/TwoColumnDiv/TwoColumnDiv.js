import React from 'react';

import classes from './TwoColumnDiv.module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import ArrowRightBlue from '../UI/Carousel/arrowRightBlue';

const TwoColumnDiv = (props) => {
    let button1 = null;
    if (props.buttonText) {
        button1 = <Button 
            buttonText = {props.buttonText}
            buttonLink = {props.buttonLink}
            />;
    }
    let button2 = null;
    if (props.button2Text) {
        button2 = <Button 
            whiteButton 
            buttonText = {props.button2Text}
            buttonLink = {props.button2Link}
            />;
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
            <br />
            {props.underText ? <Link to={'/vikar/hop-ombord'}>{props.underText} <span style={{height:'13px', width:'13px', display:'inline-block'}}><ArrowRightBlue /></span></Link> : null}
        </div>
        <div className={classes.ImageDiv}>
            {props.imageDiv}
        </div>
    </div>
    )
};

export default TwoColumnDiv;