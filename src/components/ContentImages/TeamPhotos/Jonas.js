import React, { useState } from 'react';

import photoJonas from '../../../assets/images/team/Jonas.jpg';

import classes from './Team.module.css'

export const CandidatePhotoJonas = (props) => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={photoJonas} alt="Jonas photo"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}