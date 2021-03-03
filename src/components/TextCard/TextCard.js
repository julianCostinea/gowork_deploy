import React from 'react';

import classes from './TextCard.module.css';

const TextCard = (props) => {
    const formattedCardBody = props.cardBody.split('\n').map((str, index) => <p key={index}>{str}</p>);
    const formattedCardHeader = props.cardHeader.split('\n').map((str, index) => <h2 key={index}>{str}</h2>);
    return ( 
        <div className={classes.Card}>
            <div className={classes.Header}>
                {formattedCardHeader}
            </div>
            <div className={classes.Body}>
                {formattedCardBody}
            </div>
        </div>        
    );
}
 
export default TextCard;