import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const toolbar = (props) => {
    let attachedClasses = [classes.Container];
    if (props.showBox) {
        attachedClasses = [classes.Container, classes.BoxShadow];
    }
    return(
        <div className={attachedClasses.join(' ')}>
            <header className={classes.Toolbar}>
                <DrawerToggle clicked={props.drawerToggleClicked} />
                <nav className={classes.DesktopOnly}>
                    <NavigationItems />
                </nav>
                <div>
                </div>
            </header>
        </div>
    );
}

export default toolbar;