import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <Logo />
        <NavigationItem clicked = {props.closeModal} link="/vikar">Jobsøgende</NavigationItem>
        <NavigationItem clicked = {props.closeModal} link="/virksomheder">Virksomheder</NavigationItem>
        <NavigationItem clicked = {props.closeModal} link="/uddanelser">Uddannelsessteder</NavigationItem>
        <div className={classes.KontaktNav}>
            <NavigationItem 
                clicked = {props.closeModal} 
                link="/kontakt">
                    Kontakt os
            </NavigationItem>
        </div>
    </ul>
);

export default navigationItems;