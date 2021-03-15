import React from 'react';

import classes from './ContentImage.module.css'
import VirksomehederImage from '../../assets/images/virksomheder_image.png';

const VirksomehederImg = (props) => (
    <div style={{height: props.height}}>
        <img className={classes.Laptop} src={VirksomehederImage} alt="Virksomeheder"/>
    </div>
);

export default VirksomehederImg;