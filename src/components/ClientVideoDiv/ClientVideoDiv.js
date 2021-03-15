import React from 'react';

import classes from './ClientVideoDiv.module.css';

const ClientVideoDiv = (props) => {
    let attachedClasses = [classes.Container];
    let headerClasses = [classes.Header]
    if (props.whiteDiv) {
        attachedClasses = [classes.Container, classes.White];
    }
    const formattedHeader = props.header.split('\n').map((str, index) => <h4 key={index}>{str}</h4>);
    return(
    <div>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Header}>
                {formattedHeader}
            </div>
            {props.children}
        </div>
    </div>
    )
};

export default ClientVideoDiv;