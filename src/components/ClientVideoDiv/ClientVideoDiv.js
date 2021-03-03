import React from 'react';

import classes from './ClientVideoDiv.module.css';

const ClientVideoDiv = (props) => {
    let attachedClasses = [classes.Container];
    let headerClasses = [classes.Header]
    if (props.whiteDiv) {
        attachedClasses = [classes.Container, classes.White];
    }
    if (props.whiteDiv) {
        headerClasses = [classes.Header, classes.White];
    }
    const formattedHeader = props.header.split('\n').map((str, index) => <h4 key={index}>{str}</h4>);
    return(
    <div>
        <div className={headerClasses.join(' ')}>
                {formattedHeader}
        </div>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.TextDiv}>
                <div className={classes.Paragraph}>
                    <p>{props.children}</p>
                </div> 
            </div>
            <div className={classes.ImageDiv}>
                {props.imageDiv}
            </div>
        </div>
    </div>
    )
};

export default ClientVideoDiv;