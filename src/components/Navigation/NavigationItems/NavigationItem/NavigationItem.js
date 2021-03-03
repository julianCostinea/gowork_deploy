import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';

import classes from './NavigationItem.module.css';


class navigationItem extends Component {
    state={
        showDropdown: false
    }
    dropdownShow= () => {
        if (this.props.dropdownLedigeStillinger) {
            this.setState({
                showDropdown: true
            })
        }
    }
    dropdownHide = (event) => {
        if (this.props.dropdownLedigeStillinger) {
            if (event.target.id !== 'listItem' || event.target.id !=='navlink' || event.target.id !== 'dropdown') {
                this.setState({
                    showDropdown: false
                })
            }
        }
    }

    render(){
        let attachedClasses = [classes.NavigationItem];
        if (this.props.dropdownLedigeStillinger) {
            attachedClasses = [classes.NavigationItem, classes.Relative];
        }
        return (
        <li
            className={attachedClasses.join(' ')} 
            onMouseEnter={this.dropdownShow}
            onMouseLeave={this.dropdownHide}
            id={'listItem'}
            >
            <NavLink 
                id={'navlink'}
                onClick={this.props.clicked}
                to={this.props.link} 
                activeClassName={classes.active}>{this.props.children}</NavLink>
            {this.props.dropdownLedigeStillinger ? <Dropdown close={this.dropdownHide} open={this.state.showDropdown}/> : null }
        </li>
        )
    }
}

export default navigationItem;