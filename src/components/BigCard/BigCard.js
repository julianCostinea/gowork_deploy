import React from 'react';

import classes from './BigCard.module.css';

const BigCard = (props) => {
    const formattedCardBody = props.cardBody.split('\n').map((str, index) => <p key={index}>{str}</p>);
    return ( 
        <div className={classes.Card}>
            <h1>{props.cardTitle}</h1>
            <div className={classes.Header}>
                {props.cardPhoto ? props.cardPhoto  : 'BILLEDE'}
            </div>
            <div className={classes.Body}>
                <h3 style={{color: '#2a5c91', marginBottom:'0.5rem'}}>{props.cardHeader}</h3>
                {formattedCardBody}
            </div>
        </div>        
    );
}
 
export default BigCard;