import React, { useState } from 'react';

import matchPhoto from '../../../assets/images/MATCH.png';

import classes from './CardImage.module.css'

const CardPhoto = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={matchPhoto} alt="Match"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}


export default CardPhoto;