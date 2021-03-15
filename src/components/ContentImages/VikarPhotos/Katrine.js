import React, { useState } from 'react';

import KatrinePhoto from '../../../assets/images/Vikarer/Katrine.jpg';

import classes from './Vikar.module.css'

export const VikarPhotoKatrine = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.VikarPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={KatrinePhoto} alt="Katrine"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}