import React, { useState } from 'react';

import RikkePhoto from '../../../assets/images/Clients/Rikke.jpg';

import classes from './ClientPhoto.module.css'

export const ClientPhotoRikke = (props) => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.ClientPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={RikkePhoto} alt="Rikke"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}