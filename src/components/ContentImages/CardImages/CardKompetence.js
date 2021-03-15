import React, { useState } from 'react';

import KompetencePhoto from '../../../assets/images/Kompetence_grafik.png';

import classes from './CardImage.module.css'

const CardPhoto = (props) => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={KompetencePhoto} alt="Kompetence"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}


export default CardPhoto;