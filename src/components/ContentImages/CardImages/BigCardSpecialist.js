import React, { useState } from 'react';

import SpecialistPhoto from '../../../assets/images/Specialist_rettet.png';

import classes from './CardImage.module.css'

const BigCardPhoto = (props) => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={SpecialistPhoto} alt="Studerende"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}


export default BigCardPhoto;