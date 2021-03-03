import React from 'react';

import { Link } from 'react-router-dom';

import classes from './Footer.module.css';
import FacebookIcon from '../Icons/facebookIcon';
import LinkedInIcon from '../Icons/linkedInIcon';

const footer = (props) => {
    return ( 
        <div className={classes.Footer}>
            <div>
                <ul className={classes.List}>
                    <h3>JOBSØGENDE</h3>
                    <li><a href={'#'}>Om os</a></li>
                    <li><Link to={'/hop-ombord'}>Hop ombord</Link></li>
                </ul>
            </div>
            <div>
                <ul className={classes.List}>
                    <h3>VIRKSOMHEDER</h3>
                    <li><a href={'#'}>Vikarløsninger</a></li>
                    <li><a href={'#'}>Mere om GOWORK</a></li>
                </ul>
            </div>
            <div>
                <ul className={classes.List}>
                    <h3>UDDANNELSESSTEDER</h3>
                    <li><a href={'#'}>Om os</a></li>
                    <li><a href={'#'}>Jobtyper</a></li>
                    <li><a href={'#'}>Ansøgningsproces</a></li>
                </ul>
            </div>
            <div>
                <ul className={classes.List}>
                    <h3>Følg os</h3>
                    <FacebookIcon link ='https://www.facebook.com/goworkodense/' />
                    <LinkedInIcon link = 'https://dk.linkedin.com/company/go-work-aps'/>
                </ul>
            </div>
        </div>
     );
}
 
export default footer;