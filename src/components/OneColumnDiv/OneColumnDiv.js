import React from 'react';

import classes from './OneColumnDiv.module.css';

const OneColumnDiv = (props) => {
    let formattedParagraph = '';
    if (props.paragraph) {
        formattedParagraph = props.paragraph.split('\n').map((str, index) => <p key={index}>{str}</p>);
    }
    let attachedClasses = [classes.Container];
    if (props.whiteDiv) {
        attachedClasses = [classes.Container, classes.White];
    }
    return (
    <div className={attachedClasses.join(' ')}>
        <div>
            <h4 style={ props.bigHeader ? { fontSize:'5rem', marginBottom:'1rem'} : {}}>
                {props.header}
            </h4>
        </div>
        {props.secondHeader ? <h4>{props.secondHeader}</h4> : null}
        <div className={classes.Paragraph}>
            {formattedParagraph}
        </div>
        <div className={classes.UnderHeader}>
            <h2>{props.underHeader}</h2>
        </div>
        <div className={classes.Children}>
            {props.children}
        </div>
    </div>
    );
}

export default OneColumnDiv;