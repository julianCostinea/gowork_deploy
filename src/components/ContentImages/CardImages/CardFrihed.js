import React, { useState } from 'react';

import frihedPhoto from '../../../assets/images/Stock_frihed.png';

import classes from './CardImage.module.css'

const CardPhoto = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={frihedPhoto} alt="Frihed"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}


export default CardPhoto;