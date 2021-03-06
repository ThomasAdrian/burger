import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToogle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToogle clicked={props.drawerToggleClicked} />
            {/* <Logo height="80%" /> */}
            <div className={classes.Logo}>
                <Logo />
            </div>

            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>

        </header>
    );
};

export default toolbar;