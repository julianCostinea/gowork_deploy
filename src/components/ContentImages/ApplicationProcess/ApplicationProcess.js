import React, { useState } from 'react';

import applicationProccess from '../../../assets/images/Rekrutteringsproces.png';

import classes from './ApplicationProcess.module.css'

const ApplicationProcess = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={applicationProccess} alt="Application process"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}


export default ApplicationProcess;