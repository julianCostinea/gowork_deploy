import React, {Component} from 'react';
import Button from '../../components/Button/Button';

import classes from './Kontakt.module.css';
import Logo from '../../components/Logo/Logo';

class Kontakt extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={classes.KontaktFormContainer}>
                <h1>Laborum officia id consectetur voluptate irure.</h1>
                <p>Excepteur duis non ipsum consectetur ipsum ut commodo.</p>
                <p>Duis sunt cillum mollit mollit consectetur dolore qui irure aute reprehenderit sit quis cillum.</p>
                <div className={classes.KontaktForm}>
                    <h4>Enter your Contact Data</h4>
                    <div><Logo /> </div>
                    <div className={classes.Input}>
                        <input 
                            className={classes.InputElement}
                            type="text" 
                            placeholder="First Name" 
                            name="firstName"/>
                    </div>
                    <div className={classes.Input}>
                        <input 
                                className={classes.InputElement}
                                type="text" 
                                placeholder="Last Name" 
                                name="lastName"/>
                    </div>
                    <div className={classes.Input}>
                        <input 
                                className={classes.InputElement}
                                type="email" 
                                placeholder="Email" 
                                name="email"/>
                    </div>
                    <div className={classes.Input}>
                        <input 
                                className={classes.InputElement}
                                type="text" 
                                placeholder="City" 
                                name="city"/>
                    </div>
                    <div className={classes.Input}>
                        <input 
                                className={classes.InputElement}
                                type="text" 
                                placeholder="Virksomedens navn" 
                                name="virksomhed"/>
                    </div>
                    <div className={classes.Input}>
                        <textarea 
                                className={classes.InputElement}
                                resize ={'none'}
                                rows = {5}
                                placeholder="Tell us more about your hiring needs" 
                                name="description"/>
                    </div>
                    <Button buttonText = "Submit" rounded/>
                </div>
            </div>
         );
    }
}
 
export default Kontakt;