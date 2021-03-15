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
                    <h3>GoWork</h3>
                    <li style={{lineHeight : '1.5rem'}}>GoWork er et vikar- og freelancebureau med 2<br/>
                        gazellepriser. Vi har siden 2012 formidlet <br/>
                        talentfulde studerende og nyuddannede til <br/>
                        vikariater- og studiejobs, og specialister til <br/>
                        freelanceopgaver. </li>
                    <li style={{fontWeight: 'bold'}}>
                        Er din virksomhed klar til at Go Work?
                    </li>
                </ul>
                <FacebookIcon/>
                <LinkedInIcon/>
            </div>
            <div>
                <ul className={classes.List}>
                    
                    <h3>GoWork ApS</h3>
                    <li style={{lineHeight : '1.5rem'}}>Fjordsgade 11, 1. sal <br/>
                    5000 Odense C. <br />
                    Tlf.: 6610 6500 <br/>
                    CVR.: 34704813</li>
                </ul>
            </div>
        </div>
     );
}
 
export default footer;