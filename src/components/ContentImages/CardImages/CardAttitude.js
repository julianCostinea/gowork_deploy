import React, { useState } from 'react';

import AttitudePhoto from '../../../assets/images/ATTITUDE.png';

import classes from './CardImage.module.css'

const CardPhoto = (props) => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={AttitudePhoto} alt="Attitude"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}


export default CardPhoto;