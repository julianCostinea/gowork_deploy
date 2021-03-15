import React, { useState } from 'react';

import okonomiPhoto from '../../../assets/images/OKONOMI.png';

import classes from './CardImage.module.css'

const CardPhoto = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={okonomiPhoto} alt="Okonomi"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}


export default CardPhoto;