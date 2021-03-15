import React, { useState } from 'react';

import JacobPhoto from '../../../assets/images/Clients/Ole.jpg';

import classes from './ClientPhoto.module.css'

export const ClientPhotoJacob = (props) => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.ClientPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={JacobPhoto} alt="Jacob"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}