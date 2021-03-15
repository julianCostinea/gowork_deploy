import React, { useState } from 'react';

import SabbatarPhoto from '../../../assets/images/Sabbatar_rettet.png';

import classes from './CardImage.module.css'

const BigCardPhoto = (props) => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={SabbatarPhoto} alt="Studerende"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}


export default BigCardPhoto;