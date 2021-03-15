import React, { useState } from 'react';

import TinePhoto from '../../../assets/images/Clients/Ole.jpg';

import classes from './ClientPhoto.module.css'

export const ClientPhotoTine = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.ClientPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={TinePhoto} alt="Tine"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}