import React, { useState } from 'react';

import TeamPhoto from '../../../assets/images/Stock_team.jpg';

import classes from './CardImage.module.css'

const CardPhoto = (props) => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={TeamPhoto} alt="Team"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}


export default CardPhoto;