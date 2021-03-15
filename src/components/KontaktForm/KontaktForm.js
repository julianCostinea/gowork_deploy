import React from 'react';

import Button from '../../components/Button/Button';

import classes from './KontaktForm.module.css';

const KontaktForm = (props) => {
    return ( 
        <div className={classes.KontaktFormContainer}>
                    {props.noHeader ? null : (
                        <React.Fragment>
                            <h1>Kontakt</h1>
                            <h3 style={{color: '#305d95' , fontWeight: 'bold'}}>Er du interesseret i at vide mere? Fortæl os om dit personalebehov.</h3>
                        </React.Fragment>
                    )}  
                    <div className={classes.KontaktForm}>
                        <div className={classes.Input}>
                            <label htmlFor={'name'}>NAVN*</label>
                            <input 
                                className={classes.InputElement}
                                type="text" 
                                name="name"
                                id="name"
                                autoComplete="name"
                                />
                        </div>

                        <div className={classes.TwoColumn}>
                            <div className={classes.Input}>
                                <label htmlFor={'email'}>EMAIL*</label>
                                <input 
                                        className={classes.InputElement}
                                        type="email" 
                                        id="email" 
                                        autoComplete="email"
                                        name="email"/>
                            </div>
                            <div className={classes.Input}>
                                <label htmlFor={'email'}>TELEFON*</label>
                                <input 
                                        className={classes.InputElement}
                                        type="tel" 
                                        id="phone" 
                                        autoComplete="phone"
                                        name="phone"/>
                            </div>
                        </div>
    
                        <div className={classes.Input}>
                            <label htmlFor={'description'}>FORTÆL OS KORT OM DIT BEHOV*</label>
                            <textarea 
                                    className={classes.InputElement}
                                    resize ={'none'}
                                    rows = {5}
                                    id="description" 
                                    name="description"/>
                        </div>
                        <div style={{textAlign: 'right'}}>
                            <Button buttonText = "SEND" rounded/>
                        </div>
                    </div>
                </div>
    );
}
 
export default KontaktForm;