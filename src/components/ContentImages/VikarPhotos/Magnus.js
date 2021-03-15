import React, { useState } from 'react';

import MagnusPhoto from '../../../assets/images/Vikarer/Magnus.jpeg';

import classes from './Vikar.module.css'

export const VikarPhotoMagnus = (props) => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.VikarPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={MagnusPhoto} alt="Magnus"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}