import React, { useState } from 'react';

import MathiasPhoto from '../../../assets/images/Vikarer/Mathias.jpg';

import classes from './Vikar.module.css'

export const VikarPhotoMathias = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.VikarPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={MathiasPhoto} alt="Mathias"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}