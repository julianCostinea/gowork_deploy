import React from 'react';

import ModalButton from './ModalButton';

import classes from './Modal.module.css';

const ModalBox = (props) => {
    return (
        <div className={classes.ModalBox}>
            <div className={classes.Header}>
                <h3>Jeg er:</h3>
            </div>
            <div className={classes.Body}>
                <ModalButton buttonText= 'Jobsøgende' />
                <ModalButton buttonText= 'Virksomhed' />
                <ModalButton buttonText= 'Uddannelsessted' />
            </div>
        </div>     
    );
}

export default ModalBox;